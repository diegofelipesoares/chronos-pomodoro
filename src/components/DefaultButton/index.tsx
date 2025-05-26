//Importando arquivo
import styles from './styles.module.css';

//Tipificando a props com lista de tipos de buttons do JSX
type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

//função
export function DefaultButton({
  icon,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
      {/* button e id estão recebendo dados do App.tsx */}
    </>
  );
}
