//importando componentes
import { Heading } from './components/Heading';

//importando CSS
import './styles/theme.css'; //variáveis
import './styles/global.css'; //global

//Escritos em PascalCase. Ex. App, DiegoSoreas, ExDeNome

//cria a função com exportação
export function App() {
  //Funções JavaScript
  console.log('Oi');

  return (
    // Renderização no HTML - HTML + JS
    // JSX - Só permite um elemento pai no return por isso o fragmento em volta de tudo
    <>
      <Heading />
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          provident aspernatur totam voluptate, sint nisi maxime magni nulla
          amet! Qui alias quos molestias nulla praesentium ipsum numquam earum
          facere voluptates.
        </p>
      </div>
    </>
  );
}
