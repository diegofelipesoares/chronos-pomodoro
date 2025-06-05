import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[]; // Lista de tarefas

  secondsRemaining: number; // Segundos restantes no ciclo atual
  formattedSecondsRemaining: string; // Formatação dos segundos restantes (mm:ss)
  activeTask: TaskModel | null; // Tarefa ativa ou null se nenhuma estiver em andamento
  currentCycle: number; // Ciclo atual (1, 2, 3, etc.)

  //configuração do Pomodoro
  config: {
    workTime: number; // Tempo de trabalho em minutos
    shortBreakTime: number; // Tempo de descanso curto em minutos
    longBreakTime: number; // Tempo de descanso longo em minutos
    longBreakInterval?: number; // Intervalo para descanso longo em ciclos (ex: a cada 4 ciclos)
  };
};
