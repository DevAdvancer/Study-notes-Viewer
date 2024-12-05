export type Progress = 'completed' | 'not-started' | 'in-progress';

export interface Note {
  id: string;
  subject: string;
  subjectCode: string;
  content: string;
  progress: Progress;
}