import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

//Tipando o objeto Children da Props

//Children desestruturado --> Acesso direto sem escrever Props
export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='#'>
        {/* Depois iremos alterar o "a" acima para um link do router */}
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href='#'>
        {/* Depois iremos alterar o "a" acima para um link do router */}
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href='#'>
        {/* Depois iremos alterar o "a" acima para um link do router */}
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} href='#'>
        {/* Depois iremos alterar o "a" acima para um link do router */}
        <SunIcon />
      </a>
    </nav>
  );
}
