function criarCartao(pergunta,resposta){
  let conteudo=document.getElementById("conteudo")
let Cartao=document.createElement("article")
Cartao.classList='cartao'

Cartao.innerHTML=`
<div class="cartao--conteudo">
                <div class="cartao--pergunta"><p>1.PRINCIPAIS TITULOS DO CORINTHIANS </div></p>
                <div class="cartao--resposta"><p>-2 MUNDIAIS DE CLUBES 1 LIBERTADORES</div></p>
                </div>
`
conteudo.appendChild(Cartao)
}

criarCartao(1,2)