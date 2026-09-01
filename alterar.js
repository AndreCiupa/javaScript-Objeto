const pessoa = {
    nome: "luna",
    profissao: "engenheira",
}

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "123456789";

console.log(pessoa.telefone);

pessoa.nome = "Luna Silva";

console.log(pessoa);

const novaPessoa= {
    nome: "Pedro",
};

pessoa = novaPessoa;