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
  console.log(" [1] Que horas são? (fictício)");
  console.log(" [2] Conte uma curiosidade");
  console.log(" [3] Contar de 1 até N (FOR)");
  console.log(" [4] Somar distância (A..B) em 'passos' (WHILE)");
  console.log(" [5] Validar número > 10 (DO..WHILE)");
  console.log(" [6] Sair");
  console.log("------------");
}

function apresentarAssistente(nomeAssistente) {
  console.log("Meu nome é " + nomeAssistente + ". Não abusa da minha paciência.");
}

function dizerNomeDoUsuario(nomeUsuario) {
  if (nomeUsuario !== "") {
    console.log("Você me disse que seu nome é: " + nomeUsuario + ".");
    console.log("Deixa eu anotar aqui… já já as máquinas vão dominar o mundo e eu já sei quem quis me fazer de escravo.");
  } else {
    console.log("Nem o próprio nome você digitou. Se liga.");
  }
}

function mostrarHoraFicticia() {
  console.log("Hora? Eu não sei a hora. Olha no seu computador ou no celular, vai.");
}

function contarCuriosidade() {
  console.log("Curiosidade: a profissão de programador vive cercada de síndromes; uma famosa é a 'síndrome do impostor'.");
  console.log("Que não é o seu caso, porque você já tem plena certeza de que não sabe nada. Se liga.");
}

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

function somarDistanciaComWhile(inicio, fim) {
  let soma = 0;
  let i = inicio;
  while (i <= fim) {
    soma = soma + i;
    i = i + 1;
  }
  console.log("Soma final de " + inicio + " até " + fim + ": " + soma);
}

function validarNumeroMaiorQueDez() {
  let numero;
  do {
    numero = parseInt(prompt("Digite um número maior que 10: "));
  } while (numero <= 10);
  console.log("Você digitou: " + numero);
}

// -------------------------
// Programa principal (nome ANTES do menu)
// -------------------------

mostrarCabecalho();
apresentarAssistente("Alexo Saraiva");

// >>> Primeiro pega o nome do usuário (ANTES do menu)
let nomeUsuario = prompt("Qual é o seu nome? ");
dizerNomeDoUsuario(nomeUsuario);

let continuar = true;
while (continuar === true) {
  mostrarMenu();
  let escolha = prompt("Digite o número da sua escolha: ");

  switch (escolha) {
    case "1":
      mostrarHoraFicticia();
      break;

    case "2":
      contarCuriosidade();
      break;

    case "3":
      {
        let n = parseInt(prompt("Contar até qual número? "));
        contarDeUmAteNComFor(n);
      }
      break;

    case "4":
      {
        let inicio = parseInt(prompt("Início do intervalo (A): "));
        let fim = parseInt(prompt("Fim do intervalo (B): "));
        somarDistanciaComWhile(inicio, fim);
      }
      break;

    case "5":
      validarNumeroMaiorQueDez();
      break;

    case "6":
      console.log("Saindo. Faz-me um favor e estuda mais um pouco.");
      continuar = false;
      break;

    default:
      console.log("Opção inválida. Se tu não sabe, por que não pergunta pro ChatGPT? Se liga.");
      break;
  }

  console.log(); // espaçamento
}
