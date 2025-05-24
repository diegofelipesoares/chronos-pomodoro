//importando componentes
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';

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
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText='task'
              id='meuInput'
              type='text'
              placeholder='Escreva'
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
