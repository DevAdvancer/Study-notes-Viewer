# Study Notes Viewer 📚

## Overview

Study Notes Viewer is a React-based web application for managing and organizing study notes. The application allows users to view, filter, and interact with study notes across different subjects and progress stages.

## Features 🌟

- **Dynamic Note Display**: View study notes in a grid layout
- **Progress Filtering**: Filter notes by their current progress status
- **Responsive Design**: Optimized for desktop and mobile devices
- **Animated Interactions**: Smooth animations using Framer Motion
- **Easy Navigation**: Intuitive note viewing and closing mechanism

## Technologies Used 🛠️

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite
- Lucide React Icons

## Getting Started 🚀

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/DevAdvancer/Study-notes-Viewer.git
   ```

2. Navigate to the project directory
   ```bash
   cd Study-notes-Viewer
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

## Project Structure 📂

- `src/App.tsx`: Main application component
- `src/components/`: Reusable React components
- `src/data/`: Static data for notes
- `src/types.ts`: TypeScript type definitions

## Filtering Notes 🔍

The application supports filtering notes by their progress:
- `all`: Show all notes
- `completed`: Show only completed notes
- `in-progress`: Show notes currently being studied
- `not-started`: Show notes not yet begun

## Components 🧩

- `NoteCard`: Displays individual note summary
- `NoteViewer`: Expanded view of a selected note
- `SortControls`: Filtering and sorting interface
- `Footer`: Application footer

## Customization 🎨

You can easily customize notes by modifying the `notes` array in the `data` directory.

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact 📧

Project Link: [https://github.com/DevAdvancer/Study-notes-Viewer](https://github.com/DevAdvancer/Study-notes-Viewer)
