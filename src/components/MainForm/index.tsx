// Importando componentes
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

export function MainForm() {
  return (
    // Renderizando o formulário
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Escreva'
        />
      </div>
      <div className='formRow'>
        <p>O próximo intervalo é de 25min</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
        {/* O icon está sendo usado como Children, mas não é a palavra Children
            por isso ele não é passado entre duas tags, mas sim dentro de uma tag simples */}
      </div>
    </form>
  );
}
