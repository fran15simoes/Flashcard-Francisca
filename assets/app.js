function criarCartao(categoria,pergunta,resposta){
 //console.log(categoria,pergunta,resposta);
 let container = document.getEelementbyId('container');
 //VARIAVEL CARTAO QUE <ARTICLE> NO HTML
 let cartao = document.creatElement('article');
 cartao.className = 'cartao';
//CRIA CLASSE "cartao" para o elemento criado
cartao.innerHTML = 
 <div class="cartao__conteudo">
 <h3>${categoria}</h3>
 <div class="cartao__conteudo__pergunta">
        <p>O que é JavaScript?</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>0
             </p>
    </div>
    </div>
    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('')
}