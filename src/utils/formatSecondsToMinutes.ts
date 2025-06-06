export function formatSecondsToMinutes(seconds: number): string {
  //transforma segundos em minutos e segundos no formato MM:SS
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Formata os minutos e segundos para sempre ter dois dígitos
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}
// Exemplo de uso:
// console.log(formatSecondsToMinutes(125)); // Saída: "02:05"
