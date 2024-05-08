// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.
let numA = 0
let numB = 1
let NumC = 1

for(let fibonacci = 0; fibonacci <=10; fibonacci++){
    console.log(numA) 
    numC = numB+numA
    numA = numB
    numB = numC
}
