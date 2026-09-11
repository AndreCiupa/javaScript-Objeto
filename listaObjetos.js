const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@Firma.com",
    telefone: ["1155555555550", "111144444440"],
}

cliente.enderecos = [
{
    rua:"Rua Joseph Climbar",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
},
];

cliente.enderecos.push({
    rua: "r.josef ladder",
    numero: 404,
    apartamento: false,
});

console.log(cliente.enderecos);

const listaApenasApartamento = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);