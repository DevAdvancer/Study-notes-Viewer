import { Note } from '../types'
import pythonIntro from './markdown/python-intro.md?raw'
import fullStack from './markdown/fullstack.md?raw'
import operatingSystem from './markdown/operating-system.md?raw'
import machineLearning from './markdown/machine-learning.md?raw'
import unstructuredDatabase from './markdown/unstructured-database.md?raw'
import operatingSystemLab from './markdown/operating-system-lab.md?raw'
import iot from './markdown/iot.md?raw'
import unstructuredDatabaseLab from './markdown/unstructured-database-lab.md?raw'
import cloudcomputing from './markdown/cloudcomputing.md?raw'

export const notes: Note[] = [
  {
      id: '1',
      subject: 'Introduction to Python',
      subjectCode: 'CSE11118',
      content: pythonIntro,
      progress: 'completed'
  },
  {
      id: '2',
      subject: 'Full Stack Software Development',
      subjectCode: 'CSE11123',
      content: fullStack,
      progress: 'completed'
  },
  {
      id: '3',
      subject: 'Operating System',
      subjectCode: 'CSE11150',
      content: operatingSystem,
      progress: 'in-progress'
  },
  {
    id: '4',
    subject: 'Machine Learning',
    subjectCode: 'CSE11206',
    content: machineLearning,
    progress: 'in-progress'
  },
  {
    id: '5',
    subject: 'Unstructured Database',
    subjectCode: 'CSE11202',
    content: unstructuredDatabase,
    progress: 'completed'
  },
  {
    id: '6',
    subject: 'IOT',
    subjectCode: 'ECE11028',
    content: iot,
    progress: 'in-progress'
  },
  {
    id: '7',
    subject: 'Operating System Lab',
    subjectCode: 'CSE12156',
    content: operatingSystemLab,
    progress: 'in-progress'
  },
  {
    id: '8',
    subject: 'Unstructured Database Lab',
    subjectCode: 'CSE12203',
    content: unstructuredDatabaseLab,
    progress: 'completed'
  },
  {
    id: '9',
    subject: 'Introduction to Cloud Computing',
    subjectCode: 'CSE11036',
    content: cloudcomputing,
    progress: 'in-progress'
  }
];
