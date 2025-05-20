import styles from './Heading.module.css';

//Tipando o objeto Children da Props
type HeadingProps = {
  children: React.ReactNode;
};

//Children desestruturado --> Acesso direto sem escrever Props
export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
