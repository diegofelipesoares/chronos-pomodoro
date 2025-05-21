import styles from './styles.module.css';

//Tipando o objeto Children da Props

//Children desestruturado --> Acesso direto sem escrever Props
export function CountDown() {
  return <div className={styles.container}>00:00</div>;
}
