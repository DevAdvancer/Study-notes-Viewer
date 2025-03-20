import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, Award, BrainCircuit, BookMarked, X, Pause, Play, RotateCcw, Settings, Maximize, Minimize } from 'lucide-react';

// Types for our study features
interface PomodoroState {
  isActive: boolean;
  isPaused: boolean;
  minutes: number;
  seconds: number;
  mode: 'focus' | 'break';
  focusDuration: number;
  breakDuration: number;
}

interface StudyStreak {
  current: number;
  best: number;
  lastStudyDate: string | null;
}

// Study quotes to display randomly
const STUDY_QUOTES = [
  "The expert in anything was once a beginner. — Helen Hayes",
  "The beautiful thing about learning is that no one can take it away from you. — B.B. King",
  "Learning is not attained by chance, it must be sought for with ardor and diligence. — Abigail Adams",
  "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible. — Richard Feynmann",
  "The more that you read, the more things you will know. The more that you learn, the more places you'll go. — Dr. Seuss",
  "Education is not the filling of a pail, but the lighting of a fire. — W.B. Yeats",
  "The mind is not a vessel to be filled, but a fire to be kindled. — Plutarch",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. — Mahatma Gandhi"
];

// Component for study enhancing features
export const StudyFeatures: React.FC = () => {
  // Constants for SVG circle calculations - EXTRA LARGE RADIUS
  const CIRCLE_RADIUS = 85;
  const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
  
  // State for pomodoro timer
  const [pomodoro, setPomodoro] = useState<PomodoroState>(() => {
    // Try to load saved timer settings from localStorage
    const savedSettings = localStorage.getItem('pomodoroSettings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      return {
        isActive: false,
        isPaused: true,
        minutes: parsed.focusDuration || 25,
        seconds: 0,
        mode: 'focus' as const,
        focusDuration: parsed.focusDuration || 25,
        breakDuration: parsed.breakDuration || 5
      };
    }
    
    // Default settings
    return {
      isActive: false,
      isPaused: true,
      minutes: 25,
      seconds: 0,
      mode: 'focus' as const,
      focusDuration: 25,
      breakDuration: 5
    };
  });
  
  // State for timer settings visibility
  const [showTimerSettings, setShowTimerSettings] = useState<boolean>(false);
  
  // State for editing timer durations
  const [editingFocusDuration, setEditingFocusDuration] = useState<number>(pomodoro.focusDuration);
  const [editingBreakDuration, setEditingBreakDuration] = useState<number>(pomodoro.breakDuration);
  
  // State for study streak
  const [streak, setStreak] = useState<StudyStreak>(() => {
    // Initialize from localStorage if available
    const savedStreak = localStorage.getItem('studyStreak');
    return savedStreak ? JSON.parse(savedStreak) : {
      current: 0,
      best: 0,
      lastStudyDate: null
    };
  });
  
  // State for focus mode
  const [focusMode, setFocusMode] = useState<boolean>(false);
  
  // State for full-screen timer visibility
  const [isFullScreenTimer, setIsFullScreenTimer] = useState<boolean>(false);
  
  // State for current quote
  const [currentQuote, setCurrentQuote] = useState<string>('');
  
  // State for panel visibility
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);
  
  // Calculate remaining time in seconds
  const totalDurationSeconds = pomodoro.mode === 'focus' 
    ? pomodoro.focusDuration * 60 
    : pomodoro.breakDuration * 60;
  const remainingSeconds = pomodoro.minutes * 60 + pomodoro.seconds;
  const elapsedSeconds = totalDurationSeconds - remainingSeconds;

  // Calculate progress percentage (how much time has elapsed)
  const timerProgress = (elapsedSeconds / totalDurationSeconds) * 100;
  
  // Update streak when starting a new study session
  const updateStreak = useCallback(() => {
    const today = new Date().toLocaleDateString();
    
    setStreak(prev => {
      // If already studied today, don't increment
      if (prev.lastStudyDate === today) return prev;
      
      // If studied yesterday, increment streak
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toLocaleDateString();
      
      const newStreak = prev.lastStudyDate === yesterdayStr 
        ? prev.current + 1
        : 1;
      
      // Update best streak if current is higher
      const newBest = Math.max(newStreak, prev.best);
      
      return {
        current: newStreak,
        best: newBest,
        lastStudyDate: today
      };
    });
  }, []);
  
  // Function to switch between focus and break modes
  const switchMode = useCallback(() => {
    const newMode = pomodoro.mode === 'focus' ? 'break' : 'focus';
    setPomodoro(prev => ({
      ...prev,
      isActive: false,
      isPaused: true,
      minutes: newMode === 'focus' ? prev.focusDuration : prev.breakDuration,
      seconds: 0,
      mode: newMode
    }));
  }, [pomodoro.mode]);
  
  // Function to toggle pomodoro timer
  const toggleTimer = useCallback(() => {
    if (pomodoro.isActive) {
      // Pause the timer
      setPomodoro(prev => ({ ...prev, isPaused: !prev.isPaused }));
    } else {
      // Start the timer
      setPomodoro(prev => ({ ...prev, isActive: true, isPaused: false }));
      
      // Record study streak when starting a focus session
      if (pomodoro.mode === 'focus') {
        updateStreak();
      }
    }
  }, [pomodoro.isActive, pomodoro.mode, updateStreak]);
  
  // Function to reset timer
  const resetTimer = useCallback(() => {
    setPomodoro(prev => ({
      ...prev,
      isActive: false,
      isPaused: true,
      minutes: prev.mode === 'focus' ? prev.focusDuration : prev.breakDuration,
      seconds: 0
    }));
  }, []);
  
  // Function to save timer settings
  const saveTimerSettings = useCallback(() => {
    // Validate inputs (minimum 1 minute)
    const validFocusDuration = Math.max(1, editingFocusDuration);
    const validBreakDuration = Math.max(1, editingBreakDuration);
    
    setPomodoro(prev => {
      const newState = {
        ...prev,
        focusDuration: validFocusDuration,
        breakDuration: validBreakDuration,
        // Update current minutes if timer is not active
        minutes: prev.isActive ? prev.minutes : 
                (prev.mode === 'focus' ? validFocusDuration : validBreakDuration)
      };
      
      // Save settings to localStorage
      localStorage.setItem('pomodoroSettings', JSON.stringify({
        focusDuration: validFocusDuration,
        breakDuration: validBreakDuration
      }));
      
      return newState;
    });
    
    // Update editing states with validated values
    setEditingFocusDuration(validFocusDuration);
    setEditingBreakDuration(validBreakDuration);
    
    // Hide settings panel
    setShowTimerSettings(false);
  }, [editingFocusDuration, editingBreakDuration]);
  
  // Toggle full-screen timer
  const toggleFullScreenTimer = useCallback(() => {
    setIsFullScreenTimer(prev => !prev);
    
    // If closing full-screen timer, make sure panel is visible
    if (isFullScreenTimer) {
      setIsPanelOpen(true);
    }
  }, [isFullScreenTimer]);
  
  // Function to toggle focus mode
  const toggleFocusMode = useCallback(() => {
    const newFocusMode = !focusMode;
    setFocusMode(newFocusMode);
    
    // Apply focus mode to body for global effect
    document.body.classList.toggle('focus-mode', newFocusMode);
    
    // If activating focus mode, open full-screen timer
    if (newFocusMode && !isFullScreenTimer) {
      setIsFullScreenTimer(true);
      setIsPanelOpen(false);
    }
    // If deactivating focus mode, close full-screen timer
    else if (!newFocusMode && isFullScreenTimer) {
      setIsFullScreenTimer(false);
      setIsPanelOpen(true);
    }
  }, [focusMode, isFullScreenTimer]);
  
  // Generate a random quote
  const generateRandomQuote = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * STUDY_QUOTES.length);
    setCurrentQuote(STUDY_QUOTES[randomIndex]);
  }, []);
  
  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (pomodoro.isActive && !pomodoro.isPaused) {
      interval = setInterval(() => {
        if (pomodoro.seconds === 0) {
          if (pomodoro.minutes === 0) {
            // Timer completed
            clearInterval(interval as NodeJS.Timeout);
            // Play notification sound
            const audio = new Audio('/notification.mp3');
            audio.play().catch(() => console.log('Audio playback failed'));
            
            // Auto switch to the other mode when timer completes
            switchMode();
            return;
          }
          setPomodoro(prev => ({
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59
          }));
        } else {
          setPomodoro(prev => ({
            ...prev,
            seconds: prev.seconds - 1
          }));
        }
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [pomodoro.isActive, pomodoro.isPaused, pomodoro.minutes, pomodoro.seconds, switchMode]);
  
  // Store streak in localStorage
  useEffect(() => {
    localStorage.setItem('studyStreak', JSON.stringify(streak));
  }, [streak]);
  
  // Initialize with a random quote and change it periodically
  useEffect(() => {
    generateRandomQuote();
    const quoteInterval = setInterval(generateRandomQuote, 60000); // Every minute
    
    return () => clearInterval(quoteInterval);
  }, [generateRandomQuote]);
  
  return (
    <>
      {/* Floating action button to open the panel (hidden when full-screen timer is active) */}
      {!isFullScreenTimer && (
        <motion.button
          onClick={() => setIsPanelOpen(prev => !prev)}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white rounded-full p-3 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <BookMarked className="w-6 h-6" />
        </motion.button>
      )}
      
      {/* Main panel with study features */}
      <AnimatePresence>
        {isPanelOpen && !isFullScreenTimer && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed bottom-20 right-6 bg-gray-800 rounded-lg shadow-xl p-4 w-80 z-50 border border-gray-700"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                Study Tools
              </h3>
              <button 
                onClick={() => setIsPanelOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Pomodoro Timer */}
            <div className="bg-gray-900/50 rounded-lg p-3 mb-3">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  {pomodoro.mode === 'focus' ? 'Focus Timer' : 'Break Timer'}
                </h4>
                <div className="flex items-center gap-1">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleFullScreenTimer}
                    className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700/50"
                  >
                    <Maximize className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowTimerSettings(!showTimerSettings)}
                    className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700/50"
                  >
                    <Settings className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
              
              {/* Timer Settings */}
              <AnimatePresence>
                {showTimerSettings && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mb-3 bg-gray-800/50 rounded-lg p-2"
                  >
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div>
                        <label className="text-xs text-gray-400 block mb-1">Focus Duration (min)</label>
                        <input
                          type="number"
                          min={1}
                          value={editingFocusDuration}
                          onChange={(e) => setEditingFocusDuration(Math.max(1, parseInt(e.target.value) || 1))}
                          className="bg-gray-700 border border-blue-500 rounded px-3 py-1 w-full text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      
                      <div>
                        <label className="text-xs text-gray-400 block mb-1">Break Duration (min)</label>
                        <input
                          type="number"
                          min={1}
                          value={editingBreakDuration}
                          onChange={(e) => setEditingBreakDuration(Math.max(1, parseInt(e.target.value) || 1))}
                          className="bg-gray-700 border border-green-500 rounded px-3 py-1 w-full text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                      </div>
                    </div>
                    
                    <button
                      onClick={saveTimerSettings}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 px-3 rounded transition-colors"
                    >
                      Save Settings
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="flex justify-between items-center">
                {/* INCREASED CIRCLE SIZE - change from w-16 h-16 to w-20 h-20 */}
                <div className="relative w-20 h-20">
                  {/* Progress circle */}
                  <svg className="w-full h-full" viewBox="0 0 150 150">
                    <circle
                      cx="75"
                      cy="75"
                      r={CIRCLE_RADIUS}
                      fill="none"
                      stroke="#1e293b"
                      strokeWidth="10"
                    />
                    <motion.circle
                      cx="75"
                      cy="75"
                      r={CIRCLE_RADIUS}
                      fill="none"
                      stroke={pomodoro.mode === 'focus' ? "#3b82f6" : "#10b981"}
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${CIRCLE_CIRCUMFERENCE}`}
                      // Real-time update with each second
                      animate={{ 
                        strokeDashoffset: CIRCLE_CIRCUMFERENCE * (1 - timerProgress / 100) 
                      }}
                      // Added smooth transition for countdown
                      transition={{
                        duration: 1,
                        ease: "linear"
                      }}
                    />
                  </svg>
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center font-mono font-bold text-lg text-white"
                    // Added subtle pulse animation when timer is active
                    animate={pomodoro.isActive && !pomodoro.isPaused ? {
                      scale: [1, 1.05, 1],
                    } : {}}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {String(pomodoro.minutes).padStart(2, '0')}:{String(pomodoro.seconds).padStart(2, '0')}
                  </motion.div>
                </div>
                
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleTimer}
                    className={`p-2 rounded-full ${
                      pomodoro.mode === 'focus' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
                    }`}
                  >
                    {pomodoro.isActive && !pomodoro.isPaused ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white" />
                    )}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={resetTimer}
                    className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
                  >
                    <RotateCcw className="w-5 h-5 text-white" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={switchMode}
                    className={`p-2 rounded-full ${
                      pomodoro.mode === 'focus' 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {pomodoro.mode === 'focus' ? (
                      <span className="text-xs font-bold text-white">Break</span>
                    ) : (
                      <span className="text-xs font-bold text-white">Focus</span>
                    )}
                  </motion.button>
                </div>
              </div>
              
              {/* Current timer info */}
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400">
                  {pomodoro.mode === 'focus' 
                    ? `Focus: ${pomodoro.focusDuration} min` 
                    : `Break: ${pomodoro.breakDuration} min`}
                </p>
              </div>
            </div>
            
            {/* Study Streak */}
            <motion.div 
              className="bg-gray-900/50 rounded-lg p-3 mb-3"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-yellow-400" />
                Study Streak
              </h4>
              
              <div className="flex justify-between">
                <div>
                  <div className="text-2xl font-bold text-white">{streak.current}</div>
                  <div className="text-xs text-gray-400">Current Streak</div>
                </div>
                
                <div>
                  <div className="text-2xl font-bold text-white">{streak.best}</div>
                  <div className="text-xs text-gray-400">Best Streak</div>
                </div>
                
                {streak.current > 2 && (
                  <motion.div 
                    className="flex items-center"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-2xl">🔥</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
            
            {/* Focus Mode Toggle */}
            <motion.div 
              className="bg-gray-900/50 rounded-lg p-3 mb-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={toggleFocusMode}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-semibold text-gray-300">Focus Mode</span>
                </div>
                
                <div className={`w-12 h-6 rounded-full relative transition-colors ${
                  focusMode ? 'bg-purple-600' : 'bg-gray-700'
                }`}>
                  <motion.div 
                    className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"
                    animate={{ x: focusMode ? 24 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Inspirational Quote */}
            <motion.div 
              className="bg-gray-900/50 rounded-lg p-3"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              key={currentQuote}
            >
              <p className="text-sm italic text-gray-300">{currentQuote}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Full-screen timer overlay */}
      <AnimatePresence>
        {isFullScreenTimer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-50 flex flex-col items-center justify-center"
          >
            {/* Timer info bar */}
            <div className="absolute top-4 left-0 right-0 flex justify-center">
              <div className="bg-gray-800/50 rounded-full px-6 py-2 flex items-center gap-3">
                <span className={`text-sm font-medium ${pomodoro.mode === 'focus' ? 'text-blue-400' : 'text-green-400'}`}>
                  {pomodoro.mode === 'focus' ? 'Focus Time' : 'Break Time'}
                </span>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <span className="text-sm text-gray-400">
                  {pomodoro.mode === 'focus' 
                    ? `${pomodoro.focusDuration} min session` 
                    : `${pomodoro.breakDuration} min break`}
                </span>
              </div>
            </div>
            
            {/* Close button */}
            <motion.button
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-gray-800/30 rounded-full"
              onClick={toggleFullScreenTimer}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Minimize className="w-5 h-5" />
            </motion.button>
            
            {/* EXTRA LARGE TIMER DISPLAY */}
            <div className="relative w-[500px] h-[500px]">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r={CIRCLE_RADIUS}
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="8"
                />
                
                {/* Timer progress indicator - FILLS as time passes */}
                <circle
                  cx="100"
                  cy="100"
                  r={CIRCLE_RADIUS}
                  fill="none"
                  stroke={pomodoro.mode === 'focus' ? "#3b82f6" : "#10b981"}
                  strokeWidth="8"
                  strokeLinecap="round"
                  transform="rotate(-90 100 100)"
                  strokeDasharray={`${CIRCLE_CIRCUMFERENCE}`}
                  strokeDashoffset={CIRCLE_CIRCUMFERENCE * (1 - timerProgress / 100)}
                  style={{
                    transition: "stroke-dashoffset 1s linear"
                  }}
                />
              </svg>
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                // Added countdown pulse animation
                animate={pomodoro.isActive && !pomodoro.isPaused && remainingSeconds < 60 ? {
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.8, 1]
                } : {}}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="font-mono font-bold text-8xl text-white">
                  {String(pomodoro.minutes).padStart(2, '0')}:{String(pomodoro.seconds).padStart(2, '0')}
                </span>
              </motion.div>
            </div>
            
            {/* Timer controls */}
            <div className="mt-8 flex items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTimer}
                className={`p-4 rounded-full ${
                  pomodoro.mode === 'focus' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {pomodoro.isActive && !pomodoro.isPaused ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white" />
                )}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={resetTimer}
                className="p-4 rounded-full bg-gray-700 hover:bg-gray-600"
              >
                <RotateCcw className="w-8 h-8 text-white" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={switchMode}
                className={`px-6 py-4 rounded-full flex items-center gap-2 ${
                  pomodoro.mode === 'focus' 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                <span className="text-base font-bold text-white">
                  {pomodoro.mode === 'focus' ? 'Take a Break' : 'Back to Focus'}
                </span>
              </motion.button>
            </div>
            
            {/* Quote */}
            <motion.div 
              className="absolute bottom-10 left-0 right-0 mx-auto max-w-lg px-6 text-center"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 0.8 }}
              key={currentQuote}
            >
              <p className="text-gray-300 italic">{currentQuote}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Focus mode overlay - only visible when focus mode is on but full-screen timer is off */}
      <AnimatePresence>
        {focusMode && !isFullScreenTimer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm pointer-events-none z-10"
          />
        )}
      </AnimatePresence>
    </>
  );
};

// Global focus mode styles
const focusModeStyles = `
  .focus-mode .note-card:not(:hover) {
    opacity: 0.6;
    filter: grayscale(50%);
    transition: opacity 0.3s ease, filter 0.3s ease;
  }
  
  .focus-mode .heading {
    opacity: 0.7;
  }
`;

// Provider component to wrap around App
export const StudyThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Add global styles for focus mode
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = focusModeStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  
  return (
    <div className="study-theme">
      {children}
      <StudyFeatures />
    </div>
  );
};