export interface IProject {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    endDate?: Date;
    teamMembers: string;
    status: Number;
  }