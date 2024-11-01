function criarCartao(pergunta,resposta){
  let conteudo=document.getElementById("conteudo")
let Cartao=document.createElement("article")
Cartao.classList='cartao'

Cartao.innerHTML=`
<div class="cartao--conteudo">
                <div class="cartao--pergunta"><p>${pergunta} </div></p>
                <div class="cartao--resposta"><p>${resposta}</div></p>
                </div>
`
conteudo.appendChild(Cartao)
}

