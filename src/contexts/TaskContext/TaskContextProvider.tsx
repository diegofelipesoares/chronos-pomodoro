import { useState } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

//Typando o children
type TaskContextProviderProps = {
  children: React.ReactNode;
};

//Criando função para tirar provider de dentro do App.tsx
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);
  // Visualizar no console os dados do state sempre que ele for atualizado
  console.log('TaskContext state:', state);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}
