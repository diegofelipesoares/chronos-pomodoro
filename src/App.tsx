//importando componentes
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

//importando CSS global e variáveis
import './styles/theme.css'; //variáveis
import './styles/global.css'; //global

//Escritos em PascalCase. Ex. App, DiegoSoreas, ExDeNome

//cria a função com exportação
export function App() {
  //Funções JavaScript

  return (
    // Renderização no HTML - HTML + JS
    // JSX - Só permite um elemento pai no return por isso o fragmento em volta de tudo
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>

      <Container>
        <Heading>FORM</Heading>
      </Container>

      <Container>
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );
}
