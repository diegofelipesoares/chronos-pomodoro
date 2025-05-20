import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

//Tipando o objeto Children da Props

//Children desestruturado --> Acesso direto sem escrever Props
export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='#'>
        {/* Depois iremos alterar o "a" acima para um link do router */}
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}
