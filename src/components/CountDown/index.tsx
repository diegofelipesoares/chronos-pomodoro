import styles from './styles.module.css';

//Tipando o objeto Children da Props
type CountDownProps = {
  fomattedSecondsRemaining: string;
};

//Children desestruturado --> Acesso direto sem escrever Props
export function CountDown({ fomattedSecondsRemaining }: CountDownProps) {
  return <div className={styles.container}>{fomattedSecondsRemaining}</div>;
}
