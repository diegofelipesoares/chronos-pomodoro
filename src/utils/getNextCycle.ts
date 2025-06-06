export function getNextCycle(currentCycle: number) {
  //contar ciclos de 1 até 8
  return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;
}
