const cliente = {
    nome: "Andre",
    idade: 16,
    cpf: "112223345",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente e ${cliente.nome} e essa pessoa tem ${cliente.idade} anos,`);

console.log(`os 3 primeiros digitos do cpf sao ${cliente.cpf.substring (0,3)}`);


const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log (`A chave ${chave} tem valor ${cliente[chave]}`);
});
