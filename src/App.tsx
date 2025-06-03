//importando componentes
import { Home } from './pages/home';

//importando CSS global e variáveis
import './styles/theme.css'; //variáveis
import './styles/global.css'; //global

//Importando Context
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

//cria a função com exportação
export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
