let valorTotal = parseFloat(prompt('Digite o valo pago na sua compra'))
if (valorTotal <= 100.00){
    alert('Sem desconto')
}
else if(valorTotal > 100.00 && valorTotal <=200.00){
    alert('Desconto de 10%')
 alert(Math.round(valorTotal*0.9))
    
}

if(valorTotal > 200.00){
    alert('20% de desconto')
    alert(Math.round(valorTotal*0.8))
   
}