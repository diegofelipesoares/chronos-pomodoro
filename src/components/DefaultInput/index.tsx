//Tipificando a props com lista de tipos de inputs do JSX
type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

//função
export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>

      <input id={id} type={type} {...rest} />
      {/* input e id estão recebendo dados do App.tsx */}
    </>
  );
}
