//importando componentes
import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';

//importando CSS global e variáveis
import '../../styles/theme.css'; //variáveis
import '../../styles/global.css'; //global

//Tipando Children
type MainTemplateProps = {
  children?: React.ReactNode; //children pode ser qualquer elemento React
};

//cria a função com exportação
export function MainTemplate({ children }: MainTemplateProps) {
  return (
    /* O template será chamado em todas as páginas para manter a estrutura
    Dentro dele temos o children, que trará 
    o conteúdo específico de cada página */
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
