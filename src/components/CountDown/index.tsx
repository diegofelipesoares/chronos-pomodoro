import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './styles.module.css';

export function CountDown() {
  //usando função de acesso ao estado do Context
  const { state } = useTaskContext();

  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
