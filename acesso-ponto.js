const cliente = {
    nome: "Andre",
    idade: 16,
    cpf: "112223345",
    email: "andre@domonio.com",
};

console.log(`O nome do cliente e ${cliente.nome} e essa pessoa tem ${cliente.idade} anos,`);

console.log(`os 3 primeiros digitos do cpf sao ${cliente.cpf.substring (0,3)}`);
