function criarCartao(categoria,pergunta,resposta){
    //console.log(categoria,pergunta,resposta);
    let container = document.getEelementbyId(´container`);
    let cartao = document.creatElement(´article`);
    cartao.className = ´cartao`;
    
    cartao.innerHTML =
                `
                <div class="cartao__conteudo">
                    <h3programacao</h3>
                    <div class="cartao__conteudo__resposta">
}