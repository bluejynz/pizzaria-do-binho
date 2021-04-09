var precoFinal = 0;
var precisaTroco = false;
var saboresMarcados = 0;

var pedido = {
    tamanho: "",
    borda: "",
    sabor1: "",
    sabor2: "",
    bebida: ""
};

var pessoa = {
    nome: "",
    celular: ""
};

var endereco = {
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    pontoDeRef: ""
};

var formaDePagamento = [
    "cartao de credito", "cartao de debito", "pix", "picpay", "dinheiro"
];

// function makeNameCapitalize(value){
//     var nomes = value.toLowerCase().split(' ');
//             for(var i = 0; i < nomes.length; i++){
//                 nomes[i] = nomes[i].charAt(0).toUpperCase() + nomes[i].substring(1);
//             }
//             return nomes.join(' ');
// }

<<<<<<< HEAD

function getTamanhoPizza(){
    let radios = document.getElementsByName("tamanhoPizza");
    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            pedido.tamanho = radios[i].value;
            break;
=======
// // if(document.getElementsByTagName("tamanhoPizza"))



var quantidadeDeSabores = parseInt(prompt("Quer quantos sabores? 2 ou 1"));
choose(quantidadeDeSabores);
function choose(qtd){
    if(qtd > 2 || qtd < 1){
        quantidadeDeSabores = parseInt(prompt("Digite a quantidade certa de sabores. 2 ou 1?"));
        choose(quantidadeDeSabores);
    } else{
        switch(qtd) {
            case 1:
                var sabor = prompt(`Digite o número do sabor da pizza:\n
                    Relembrando as opções:\n
                    1- Calabresa\n
                    2- 4 queijos\n
                    3- Frango com Catupiry\n
                    4- Portuguesa\n
                    5- Camarão\n
                    6- Carne Seca\n
                    7- Lombo Canadense\n
                    8- X-Fritas`);
                break;
            case 2:
                var saborUm = prompt(`Digite o número do sabor da pizza:\n
                    Relembrando as opções:\n
                    1- Calabresa\n
                    2- 4 queijos\n
                    3- Frango com Catupiry\n
                    4- Portuguesa\n
                    5- Camarão\n
                    6- Carne Seca\n
                    7- Lombo Canadense\n
                    8- X-Fritas`);
                var saborDois = prompt(`Digite o número do segundo sabor:
                    Relembrando as opções:\n
                    1- Calabresa\n
                    2- 4 queijos\n
                    3- Frango com Catupiry\n
                    4- Portuguesa\n
                    5- Camarão\n
                    6- Carne Seca\n
                    7- Lombo Canadense\n
                    8- X-Fritas`);
                break;
>>>>>>> e46519b8daf423deb25fd4ce9d29a681c1970fec
        }
    }
}

function getTipoBorda(){
    let radios = document.getElementsByName("bordaPizza");
    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            pedido.borda = radios[i].value;
            break;
        }
    }
}

// function getSabores(){
//     let checkboxes = document.getElementsByName("sabores");
//     let count = 0;
//     for(var i = 0; i < checkboxes.length; i++){
//         if(checkboxes[i].checked){
//             count++;
//             if(count <= 2){
//                 pedido.sabores[count-1] = checkboxes[i].value;
//             }
//         }
//     }
// }

// function indexSabores(cb, value){
//     let indexSabor;
//     switch(value){
//         case 'calabresa':
//             indexSabor = 0;
//             break;
//         case '4queijos':
//             indexSabor = 1;
//             break;
//         case 'frangoCatupiry':
//             indexSabor = 2;
//             break;
//         case 'portuguesa':
//             indexSabor = 3;
//             break;
//         case 'camarao':
//             indexSabor = 4;
//             break;
//         case 'carneSeca':
//             indexSabor = 5;
//             break;
//         case 'lomboCanadense':
//             indexSabor = 6;
//             break;
//         case 'xFritas':
//             indexSabor = 7;
//             break;
//     }
// }

function testSabores(cb, value){
    //quando for clicado
    //  se não estiver marcado
    //      preciso saber se já tem 2 marcados
    //          se tiver, esse não pode ser marcado alerta(vc só pode marcar 2 opções)
    //          se não tiver, adicionar o valor ao array
    //      se tiver marcado
    //  preciso desmarcar e tirar o seu valor do array
    //TESTE PARA OS CHECKBOXES
    
    if(cb.checked){ // on checked
        if(saboresMarcados < 2){
            saboresMarcados++;
            if(saboresMarcados == 1){
                pedido.sabor1 = value;
            } else if(saboresMarcados == 2){
                pedido.sabor2 = value;
            }
        } else{
            cb.checked = false;
            alert("Você só pode escolher no máximo 2 sabores!");
        }
    } else if(!cb.checked){ // on unchecked
        saboresMarcados--;
    }
    console.log(pedido.sabor1);
    console.log(pedido.sabor2);
    console.log(saboresMarcados);
}

function getSabores(){
    //TESTE DO BOTÃO ENVIAR
}

function enviar(){
    getTamanhoPizza();
    getTipoBorda();
    getSabores();
}



// var qtdDeSabores = parseInt(prompt("Quer quantos sabores? 2 ou 1"));
// choose(qtdDeSabores);
// function choose(qtd){
//     if(qtd > 2 || qtd < 1){
//         qtdDeSabores = parseInt(prompt("Digite a quantidade certa de sabores. 2 ou 1?"));
//         choose(qtdDeSabores);
//     } else{
//         switch(quantidaDeSabores) {
//             case 1:
//                 var sabor = prompt(`Digite o número do sabor da pizza:\n
//                     Relembrando as opções:\n
//                     1- Calabresa\n
//                     2- 4 queijos\n
//                     3- Frango com Catupiry\n
//                     4- Portuguesa\n
//                     5- Camarão\n
//                     6- Carne Seca\n
//                     7- Lombo Canadense\n
//                     8- X-Fritas`);
//                 break;
//             case 2:
//                 var saborUm = prompt(`Digite o número do sabor da pizza:\n
//                     Relembrando as opções:\n
//                     1- Calabresa\n
//                     2- 4 queijos\n
//                     3- Frango com Catupiry\n
//                     4- Portuguesa\n
//                     5- Camarão\n
//                     6- Carne Seca\n
//                     7- Lombo Canadense\n
//                     8- X-Fritas`);
//                 var saborDois = prompt(`Digite o número do segundo sabor:
//                     Relembrando as opções:\n
//                     1- Calabresa\n
//                     2- 4 queijos\n
//                     3- Frango com Catupiry\n
//                     4- Portuguesa\n
//                     5- Camarão\n
//                     6- Carne Seca\n
//                     7- Lombo Canadense\n
//                     8- X-Fritas`);
//                 break;
//         }
//     }
// }