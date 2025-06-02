//importando componentes

//importando CSS global e variáveis
import './styles/theme.css'; //variáveis
import './styles/global.css'; //global
import { Home } from './pages/home';
import type { TaskStateModel } from './models/TaskStateModel';
import { useState } from 'react';

//Criando constante para inicializar valores do estado
const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

//cria a função com exportação
export function App() {
  //Estado
  const [state, setState] = useState(initialState);

  return (
    <>
      <Home estado={state} mudaEstado={setState} />
    </>
  );
}
