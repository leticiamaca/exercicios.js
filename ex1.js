
// let login = prompt('Olá, digite seu nome:');
// let senha = prompt('Digite sua senha:')
// if (login === "admin" & senha == 'senha123'){
//     alert('Seja Muito Bem-vindo ')
// }else{
//     alert('Erro no login, verifique se você colocou as informações corretamente')
// }

let username = prompt('Digite um nome de usuário');
let senha = prompt('Digite a senha')

if(username == "admin" && senha == "senha123"){
 console.log('Login bem sucedido')
}else{
    console.log('Você não tem permissão de acesso!')
}