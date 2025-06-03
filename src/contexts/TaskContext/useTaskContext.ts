import { useContext } from 'react';
import { TaskContext } from './TaskContext';

//Função para ser utilizada pelos componentes para acesso ao estado.
export function useTaskContext() {
  return useContext(TaskContext);
}
