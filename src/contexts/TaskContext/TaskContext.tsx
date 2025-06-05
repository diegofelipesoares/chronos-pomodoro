import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';

//Tipando o state e setState
type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

//Criando objeto para guardar state e setState
const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

//Criando contexto
export const TaskContext = createContext<TaskContextProps>(initialContextValue);

//Typando o children
// type TaskContextProviderProps = {
//   children: React.ReactNode;
// };
