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

// NOVA: pede o nome até ser válido
function pedirNomeUsuario() {
  let nome;
  do {
    nome = prompt("Qual é o seu nome? ");
    if (!nome || nome.trim() === "") {
      console.log("Nome vazio? Se liga. Digita um nome decente.");
    }
  } while (!nome || nome.trim() === "");
  return nome.trim();
}

function mostrarHoraFicticia() {
  console.log("Hora? Tô com preguiça. Olha no seu computador ou no celular, vai....");
}

function contarCuriosidade() {
  console.log("Curiosidade: a profissão de programador vive cercada de síndromes; uma famosa é a 'síndrome do impostor'.");
  console.log("Que não é o seu caso, porque você já tem plena certeza de que não sabe nada.");
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

// [5] DO..WHILE com suas mensagens: errou -> “procura no ChatGPT”; acertou -> “Aplausos.”
function validarNumeroMaiorQueDez() {
  let numero;
  do {
    const texto = prompt("Digite um número MAIOR que 10: ");
    numero = parseInt(texto);
    if (isNaN(numero) || numero <= 10) {
      console.log("Não! Procura no ChatGPT e tenta de novo.");
    }
  } while (isNaN(numero) || numero <= 10);
  console.log("Aplausos. Número válido: " + numero + ".");
}

// -------------------------
// Programa principal (nome ANTES do menu)
// -------------------------

mostrarCabecalho();
apresentarAssistente("Alexo Saraiva");

// CORRIGIDO: insiste no nome até ficar ok
let nomeUsuario = pedirNomeUsuario();
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
