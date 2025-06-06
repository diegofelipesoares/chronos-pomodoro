// Importando componentes
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { useState } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  const [taskName, setTaskName] = useState(''); // Estado para armazenar o nome da tarefa
  const { state, setState } = useTaskContext(); // Obtendo a função setState do contexto de tarefas

  //Ciclos:
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle); // Obtendo o tipo do próximo ciclo

  // Função para lidar com o envio do formulário
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Validando input nulo ou vazio
    if (taskName === null) return; // Se o input for nulo, não faz nada
    if (taskName.trim() === '') {
      alert('Por favor, preencha o campo de tarefa.');
      return; // Se o input estiver vazio, não faz nada
    }

    // Criando um novo objeto de tarefa
    const newTask: TaskModel = {
      id: crypto.randomUUID().toString(), // Gerando um ID único para a tarefa e transformando em string
      name: taskName,
      startDate: Date.now(), // Timestamp atual
      completeDate: null, // Inicialmente nulo, pois a tarefa não foi concluída
      interruptDate: null, // Inicialmente nulo, pois a tarefa não foi interrompida
      duration: state.config[nextCycleType], // Duração da tarefa baseada no tipo de ciclo
      type: nextCycleType, // Tipo padrão da tarefa
    };

    const secondsRemaining = newTask.duration * 60; // Convertendo minutos para segundos

    // Usando setState para atualizar o estado do contexto com nova tarefa
    setState(prevState => {
      return {
        ...prevState, // Mantendo o estado anterior
        config: { ...prevState.config }, // Mantendo a configuração anterior
        activeTask: newTask, // Definindo a nova tarefa como a tarefa ativa
        currentCycle: nextCycle, // Atualizando o ciclo atual com o próximo ciclo
        secondsRemaining, //Fazer lógica para decrementar os segundos restantes
        // Fazer lógica para formatar os segundos restantes
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask], // Adicionando a nova tarefa à lista de tarefas
      };
    });
  }
  return (
    // Renderizando o formulário
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
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
