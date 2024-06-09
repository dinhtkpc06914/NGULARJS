// task.model.ts
export interface ITask {
  _id?: string;
  project_id: string;
  name: string;
  description: string;
  assignee_id: string;
  status: string;
  priority: string;
  start_date: string;
  due_date: string;
  created_at?: string;
  updated_at?: string;
}