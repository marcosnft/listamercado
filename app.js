var itens = [];
console.log('ola');
document.querySelector('input[type=submit]')
    .addEventListener('click', () => {
        var nomeProduto = document.querySelector('input[name=nome_produto]');
        var valorProduto = document.querySelector('input[name=preco]');
        itens.push({
            nome: nomeProduto.value,
            valor: valorProduto.value
        });


        /*
        <div class="lista-produtos">
        <div class="lista-produto-single">
            <h3>Red Bull</h3>
            <h3 class="price-produto"><span>R$ 20,00</span></h3>
        </div>

        */
        let listaProdutos = document.querySelector('.lista-produtos');
        let soma = 0;
        listaProdutos.innerHTML = '';
        itens.map(function(val){
            soma +=parseFloat(val.valor);
            listaProdutos.innerHTML+=`
            <div class="lista-produto-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto"><span> R$ `+val.valor+`</span></h3>
        </div><!-- /.lista-produto-single -->
            `;
        })
        soma = soma.toFixed(2);
        nomeProduto.value = '';
        valorProduto.value='';

        let elementoSoma = document.querySelector('.soma-produto');
        elementoSoma.innerHTML = '<h1>Total R$ '+soma+'</h1>';

    });

    document.querySelector('button[name=limpar]').addEventListener('click',()=>{
        itens = [];
        document.querySelector('.lista-produtos').innerHTML="";
        document.querySelector('.soma-produto').innerHTML='<h1>Total R$ 0,00 </h1>';
    })


