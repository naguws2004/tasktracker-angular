import { Task } from './Task';

export const TASKS: Task[] = [
  {
    TaskId: 1,
    TaskName: 'Doctors Appointment',
    TaskDateTime: new Date('2022-05-05T02:30:00Z'),
    Remind: true,
  },
  {
    TaskId: 2,
    TaskName: 'Meeting at School',
    TaskDateTime: new Date('2022-05-06T01:30:00Z'),
    Remind: true,
  },
  {
    TaskId: 3,
    TaskName: 'Food Shopping',
    TaskDateTime: new Date('2022-05-07T12:30:00Z'),
    Remind: false,
  },
];