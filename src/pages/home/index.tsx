import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { MainTemplate } from '../../template/MainTemplate';

//tipando a props
type HomeProps = {
  estado: TaskStateModel;
  mudaEstado: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
  const { estado, mudaEstado } = props;

  function handleClick() {
    mudaEstado(prevState => {
      return {
        ...prevState,
        currentCycle: 8,
      };
    });
  }

  console.log(props);

  return (
    <MainTemplate>
      <Container>
        <CountDown
          fomattedSecondsRemaining={estado.formattedSecondsRemaining}
        />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
