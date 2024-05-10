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

function diasDaSemana() {
  var numero = prompt('Digite um número')

  switch (numero){
      case '1':
          alert('segunda-feira');
          break;
          case '2': 
          alert('terça-feira')
          break;
          case '3':
              alert('Quarta-feira')
              break;
              case '4':
                  alert('Quinta-feira')
                  break
              case '5':
                  alert('Sexta-feira')
                  break
              case '6':
                  alert('Sábado')
                  break
              case '7':
                  alert('domingo')
                  break
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

let opcao;

while(opcao != 0) {
  opcao = parseInt(prompt(
  "Escolha o exercício que você quer executar:\n1- Contagem Regressiva\n2- Exemplo Verificação de idade\n3- Imprimindo os dias da semana\n4- Tabuada\n5 - Fibonacci\n6 - Pares de um a Vinte\n ou Digite 0 para sair"
));
  switch (opcao) {
    case 1:
      contagemRegressiva();
      break;

    case 2:
      verificacaoDeIdade();
      break;

    case 3:
      diasDaSemana();
      break;

    case 4:
      tabuada();
      break;
    case 5:
      fibonacci();
      break;
    case 6:
      ParesDeUmAvinte();
      break;
    default:
      break;
    
  }  
}

console.log('saiu')
  
  
 

 
  