//functions

function contagemRegressiva() {
  let num = parseInt(prompt("Digite um número "));
  console.log("Seu número é: " + num);

  while (num > 0) {
    num--;
    console.log(num);
  }
}

function verificacaoDeIdade() {
  let idade = parseInt(prompt("Digite a sua idade: "));

  while (idade < 18) {
    idade = parseInt(prompt("Digite sua idade novamente"));
  }

  console.log("Você é maior");
}

function imprimindoNumeros() {
  for (let num = 1; num <= 10; num++) {
    console.log(num);
  }
}

function tabuada() {
  let num = parseInt(prompt("Digite um número"));

  for (contador = 1; contador <= 10; contador++) {
    console.log(num * contador);
  }
}

function fibonacci() {
  let numA = 0;
  let numB = 1;
  let NumC = 1;

  for (let fibonacci = 0; fibonacci <= 10; fibonacci++) {
    console.log(numA);
    numC = numB + numA;
    numA = numB;
    numB = numC;
  }
}

function ParesDeUmAvinte() {
  let num = 0;
  while (num <= 20) {
    num++;
    if (num % 2 == 0) {
      console.log(num);
    }
  }
}

//menu

let opcao = prompt(
  "Escolha o exercício que você quer executar:\n1- Contagem Regressiva\n2- Exemplo Verificação de idade\n3- Imprimindo Números de 0 a 10\n4- Tabuada\n5 - Fibonacci\n6 - Pares de um a Vinte\n ou Digite 0 para sair"
);


  switch (opcao) {
    case "0":
        prompt('saiu');
        break;
    case "1":
      contagemRegressiva();
      break;

    case "2":
      verificacaoDeIdade();
      break;

    case "3":
      imprimindoNumeros();
      break;

    case "4":
      tabuada();
      break;
    case "5":
      fibonacci();
      break;
    case "6":
      ParesDeUmAvinte();
      break;
    default:
      break;
  }

  opcao = prompt(
    "Escolha o exercício que você quer executar:\n1- Contagem Regressiva\n2- Exemplo Verificação de idade\n3- Imprimindo Números de 0 a 10\n4- Tabuada\n5 - Fibonacci\n6 - Pares de um a Vinte\n ou Digite 0 para sair"
  );