export type Priority = 'low' | 'normal' | 'high';
export interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
}