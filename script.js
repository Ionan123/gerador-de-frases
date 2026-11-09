const frases = [
  "A prática leva ao progresso.",
  "Não tenha medo de começar pequeno.",
  "Cada erro é uma oportunidade de aprender.",
  "Grandes projetos começam com uma linha de código.",
  "Persistência transforma esforço em resultado.",
  "Continue aprendendo e criando!"
];
const frase = document.querySelector("#frase");
document.querySelector("#sortear").addEventListener("click", () => {
  const sorteio = Math.floor(Math.random() * frases.length);
  frase.textContent = frases[sorteio];
});