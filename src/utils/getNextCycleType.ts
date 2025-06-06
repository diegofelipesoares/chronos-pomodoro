//Importando o componente que define os Types de Ciclo que podem ser usados
import type { TaskModel } from '../models/TaskModel';

//FORMA DO PROFESSOR
// export function getNextCycleType(currentCycle: number): TaskModel['type'] {
//   // Retorna 'longBreakTime' a cada 8 ciclos resto da divisão por 8 for igual a zero
//   if (currentCycle % 8 === 0) return 'longBreakTime'; // retorna o tipo de ciclo longo divido por 8 com resultado zero
//   if (currentCycle % 2 === 0) return 'shortBreakTime';
//   return 'workTime';
// }
// Retorna o tipo de ciclo baseado no ciclo atual

//FORMA DO ALUNO COM CASES
export function getNextCycleType(currentCycle: number): TaskModel['type'] {
  switch (currentCycle) {
    case 8:
      return 'longBreakTime'; // Retorna 'longBreakTime' a cada 8 ciclos
    case 1:
    case 3:
    case 5:
    case 7:
      return 'workTime'; // Retorna 'workTime' para ciclos ímpares
    case 2:
    case 4:
    case 6:
      return 'shortBreakTime'; // Retorna 'shortBreakTime' para ciclos pares
    default:
      return 'workTime'; // Valor padrão, caso não se encaixe em nenhum caso
  }
}

// FORMA COM OBJETOS
// export function getNextCycleType(currentCycle: number): TaskModel['type'] {
//   const cycleMap: Record<number, TaskModel['type']> = {
//     1: 'workTime',
//     2: 'shortBreakTime',
//     3: 'workTime',
//     4: 'shortBreakTime',
//     5: 'workTime',
//     6: 'shortBreakTime',
//     7: 'workTime',
//     8: 'longBreakTime',
//   };

//   return cycleMap[currentCycle] || 'workTime'; // valor padrão
// }
