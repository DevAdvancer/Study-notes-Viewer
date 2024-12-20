import { Note } from '../types'
import pythonIntro from './markdown/python-intro.md?raw'
import fullStack from './markdown/fullstack.md?raw'
import compilerDesign from './markdown/compiler-design.md?raw'

export const notes: Note[] = [
  {
      id: '1',
      subject: 'Intro to Python',
      subjectCode: 'CSE11118',
      content: pythonIntro,
      progress: 'completed'
  },
  {
      id: '2',
      subject: 'Full Stack SD',
      subjectCode: 'CSE11123',
      content: fullStack,
      progress: 'completed'
  },
  {
      id: '3',
      subject: 'Compiler Design',
      subjectCode: 'CSE11132',
      content: compilerDesign,
      progress: 'not-started'
  }
];
