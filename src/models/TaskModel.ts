export type TaskModel = {
  id: string;
  name: string;
  duration: number; // em minutos
  startDate: number; // timestamp
  completeDate: number | null; // timestamp ou null se não concluída
  interruptDate: number | null; // timestamp ou null se não interrompida
  type: 'workTime' | 'shortBreakTime' | 'longBreakTime';
};
