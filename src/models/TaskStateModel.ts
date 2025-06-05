import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
  //Estado das tarefas
  tasks: TaskModel[]; // Lista de tarefas
  //Estado que controla o estado do cronômetro
  secondesRemaining: number; // Segundos restantes para a tarefa atual
  formattedSecondsRemaining: string; // Formatação dos segundos restantes
  activeTask: TaskModel | null; // Tarefa ativa ou null se nenhuma estiver ativa
  currentCycle: number; // Ciclo atual (1 a 8)
  //estado que controla as configurações do cronômetro
  config: {
    workTime: number; // Tempo de trabalho em minutos
    shortBreakTime: number; // Tempo de pausa curta em minutos
    longBreakTime: number; // Tempo de pausa longa em minutos
    longBreakInterval: number; // Intervalo para pausas longas
  };
};
