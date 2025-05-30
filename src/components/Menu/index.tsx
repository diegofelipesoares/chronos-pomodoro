import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import React, { useState, useEffect } from 'react';

//Tipando Estado (define valores que podem ser usados)
type AvailableThemes = 'dark' | 'light';

//Funções
export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storeTheme = localStorage.getItem('theme') as AvailableThemes;
    //Verifica se o tema está armazenado no localStorage se não retorna 'dark'
    return storeTheme === 'light' ? 'light' : 'dark';
  });

  function handleThemeChange(
    //tipando componente de evento
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // Previne o comportamento padrão do link (navegação)
    // Alterna o tema entre 'dark' e 'light'
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    // Alterna a string do estado entre 'dark' e 'light'
  }

  useEffect(() => {
    // Atualiza o tema do documento HTML com base no estado 'theme'
    document.documentElement.setAttribute('data-theme', theme);
    //Salva o tema no localStorage para persistência
    localStorage.setItem('theme', theme);
    // Limpeza opcional: remove o atributo 'data-theme' quando o componente é desmontado
    return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, [theme]); // Atualiza o tema sempre que o estado 'theme' mudar

  //Objeto para troca de ícones
  const iconsTheme = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        {/* Depois iremos alterar o "a" acima para um link do router */}
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver histórico'
        title='Ver histórico'
      >
        {/* Depois iremos alterar o "a" acima para um link do router */}
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        {/* Depois iremos alterar o "a" acima para um link do router */}
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleThemeChange}
      >
        {/* Chamando icone dentro do objeto pela chave */}
        {iconsTheme[theme]}
      </a>
    </nav>
  );
}
