export type TaskModel = {
  id: string;
  name: string;
  duration: number; // em minutos
  startDate: number;
  completeDate: number | null; // pode ser null se a tarefa não foi concluída.
  interruptDate: number | null; // pode ser null se a tarefa não foi interrompida.
  type: 'workTime' | 'shortBreakTime' | 'longBreakTime';
};
