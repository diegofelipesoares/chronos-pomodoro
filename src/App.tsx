//importando componentes
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';

//Importações Externas
import { PlayCircleIcon } from 'lucide-react';

//importando CSS global e variáveis
import './styles/theme.css'; //variáveis
import './styles/global.css'; //global
import { Footer } from './components/Footer';

//Escritos em PascalCase. Ex. App, DiegoSoreas, ExDeNome

//cria a função com exportação
export function App() {
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
            <DefaultButton icon={<PlayCircleIcon />} />
            {/* O icon está sendo usado como Children, mas não é a palavra Children
            por isso ele não é passado entre duas tags, mas sim dentro de uma tag simples */}
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
