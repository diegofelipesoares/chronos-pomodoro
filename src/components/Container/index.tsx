//importamos o CSS module
import styles from './styles.module.css';

//tipagem da props
type ContainerProps = {
  children: React.ReactNode;
};

//função com children
export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
