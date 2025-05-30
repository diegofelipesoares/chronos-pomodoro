//importando componentes
import { Home } from './pages/home';

//importando CSS global e variáveis
import './styles/theme.css'; //variáveis
import './styles/global.css'; //global

//Escritos em PascalCase. Ex. App, DiegoSoreas, ExDeNome

//cria a função com exportação
export function App() {
  return (
    <>
      <Home />
    </>
  );
}
