import { Note } from '../types'
import pythonIntro from './markdown/python-intro.md?raw'
import fullStack from './markdown/fullstack.md?raw'
import operatingSystem from './markdown/operating-system.md?raw'
import machineLearning from './markdown/machine-learning.md?raw'
import unstructuredDatabase from './markdown/unstructured-database.md?raw'

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
      subject: 'Operating System',
      subjectCode: 'CSE11150',
      content: operatingSystem,
      progress: 'not-started'
  },
  {
    id: '4',
    subject: 'Machine Learning',
    subjectCode: 'CSE11206',
    content: machineLearning,
    progress: 'not-started'
  },
  {
    id: '5',
    subject: 'Unstructured Database',
    subjectCode: 'CSE11202',
    content: unstructuredDatabase,
    progress: 'not-started'
  }
];
