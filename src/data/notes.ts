import { Note } from '../types'
import pythonIntro from './markdown/python-intro.md?raw'
import fullStack from './markdown/fullstack.md?raw'

export const notes: Note[] = [
  {
      id: '1',
      subject: 'Intro to Python',
      subjectCode: 'CSE11118',
      content: pythonIntro,
      progress: 'in-progress'
  },
  {
      id: '2',
      subject: 'Full Stack SD',
      subjectCode: 'CSE11123',
      content: fullStack,
      progress: 'in-progress'
  }
];
