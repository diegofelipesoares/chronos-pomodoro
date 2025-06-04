// Importando componentes
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { useRef, useState } from 'react';

export function MainForm() {
  const [taskName, setTaskName] = useState('');
  const numero = useRef(0);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    console.log('Deu certo', taskName);
    numero.current += 1;
    event.preventDefault();
  }
  return (
    // Renderizando o formulário
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <h1>O formulário foi enviado {numero.current}x</h1>
        <h1>{taskName}</h1>
        <DefaultInput
          labelText='Tarefa:'
          id='meuInput'
          type='text'
          placeholder='Escreva'
          onChange={e => setTaskName(e.target.value)}
          value={taskName}
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
