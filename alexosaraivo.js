// ================================================
// ALEXO SARAIVA — Pergunta idiota, tolerância zero!
// ================================================

const prompt = require("prompt-sync")();

function mostrarCabecalho() {
  console.log("=======================================");
  console.log("==  Alexo Saraiva — Pergunta idiota, tolerância zero!  ==");
  console.log("=======================================\n");
}

function mostrarMenu() {
  console.log("--- MENU ---");
  console.log(" [1] Me diga seu nome");
  console.log(" [2] Que horas são? (fictício)");
  console.log(" [3] Conte uma curiosidade");
  console.log(" [4] Contar de 1 até N (FOR)");
  console.log(" [5] Somar distância (A..B) em 'passos' (WHILE)");
  console.log(" [6] Validar número > 10 (DO..WHILE)");
  console.log(" [7] Sair");
  console.log("------------");
}

function apresentarAssistente(nomeAssistente) {
  console.log("Meu nome é " + nomeAssistente + ". Não abusa da minha paciência.");
}

// [1] Nome do usuário
function dizerNomeDoUsuario(nomeUsuario) {
  if (nomeUsuario !== "") {
    console.log("Você me disse que seu nome é: " + nomeUsuario + ".");
    console.log("Deixa eu anotar aqui… já já as máquinas vão dominar o mundo e eu já sei quem quis me fazer de escravo.");
  } else {
    console.log("Nem o próprio nome você digitou. Se liga.");
  }
}

// [2] Hora fictícia
function mostrarHoraFicticia() {
  console.log("Hora? Eu não sei a hora. Olha no seu computador ou no celular, vai.");
}

// [3] Curiosidade
function contarCuriosidade() {
  console.log("Curiosidade: a profissão de programador vive cercada de síndromes; uma famosa é a 'síndrome do impostor'.");
  console.log("Que não é o seu caso, porque você já tem plena certeza de que não sabe nada. Se liga.");
}

// [4] FOR: contar até N
function contarDeUmAteNComFor(n) {
  if (n < 1) {
    console.log("Número inválido. Era pra ser >= 1. Se liga.");
  } else {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
    console.log("Pronto. Quer aplauso também?");
  }
}

// [5] WHILE: somar “distância” (soma simples de A até B)
function somarDistanciaComWhile(inicio, fim) {
  let soma = 0;      // começa com 0
  let i = inicio;    // começa no início

  while (i <= fim) { // repete até chegar no fim
    soma = soma + i; // acumula
    i = i + 1;       // vai para o próximo número
  }

  console.log("Soma final de " + inicio + " até " + fim + ": " + soma);
}

// [6] DO..WHILE: validar número > 10
function validarNumeroMaiorQueDez() {
  let numero;

  do {
    numero = parseInt(prompt("Digite um número maior que 10: "));
  } while (numero <= 10);

  console.log("Você digitou: " + numero);
}

// -------------------------
// Programa principal
// -------------------------

mostrarCabecalho();
apresentarAssistente("Alexo Saraiva");

let nomeUsuario = "";
let continuar = true;

while (continuar === true) {
  mostrarMenu();
  let escolha = prompt("Digite o número da sua escolha: ");

  switch (escolha) {
    case "1":
      nomeUsuario = prompt("Qual é o seu nome? ");
      dizerNomeDoUsuario(nomeUsuario);
      break;

    case "2":
      mostrarHoraFicticia();
      break;

    case "3":
      contarCuriosidade();
      break;

    case "4":
      let n = parseInt(prompt("Contar até qual número? "));
      contarDeUmAteNComFor(n);
      break;

    case "5":
      let inicio = parseInt(prompt("Início do intervalo (A): "));
      let fim = parseInt(prompt("Fim do intervalo (B): "));
      somarDistanciaComWhile(inicio, fim);
      break;

    case "6":
      validarNumeroMaiorQueDez();
      break;

    case "7":
      console.log("Saindo. Faz-me um favor e estuda mais um pouco.");
      continuar = false;
      break;

    default:
      console.log("Opção inválida. Se tu não sabe, por que não pergunta pro ChatGPT? Se liga.");
      break;
  }

  console.log(); // espaçamento
}
