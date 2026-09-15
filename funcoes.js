const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@Firma.com",
    telefone: ["1155555555550", "111144444440"],
    saldo: 200,
    efetuaPagamento: function (valor){
        if(valor > this.saldo){
            console.log("saldo suficiente");
        }else{
            this.saldo -= valor;
            console.log(`pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }
        
    };
    cliente.efetuaPagamento(80)


