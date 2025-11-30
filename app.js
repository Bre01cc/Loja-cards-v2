'use script'

// import { createElement } from 'react'
import Produtos from './produtos.json' with{type: "json"}

function estrela(classificacaoProduto, produtos) {

    let numeroEstrela = Number(produtos.classificacao)
    for (let i = 0; i < 5; i++) {

        let estrela = document.createElement('img')
        if (i < numeroEstrela) {
            estrela.src = "./imgLogo/estrela.png"
            classificacaoProduto.appendChild(estrela)
        }
        else {
            estrela.src = "./imgLogo/estrela-branca.png"
             classificacaoProduto.appendChild(estrela)
        }
    }


} 
function mensagem(card,produtos){
   let nomeProduto = produtos.nome
   let bntCard = card
   bntCard.addEventListener('click',()=>{
    alert(`O produto selecionado foi ${nomeProduto}`)
   })
}
function criarCardsProdutos(produtos) {

    //Referenciando o container através do id
    const containerCards = document.getElementById('container-cards')

    //Criando os elementos que preencheram a página
    const cards = document.createElement('div')
    cards.classList.add('cards')

    const produtoImg = document.createElement('div')
    produtoImg.classList.add('card-produto')

    const img = document.createElement('img')

    const detalhesProduto = document.createElement('div')
    detalhesProduto.classList.add('detalhes-produtos')

    const tituloProduto = document.createElement('h4')
    const descricaoProduto = document.createElement('p')
    const precoProduto = document.createElement('span')
    const classificacaoProduto = document.createElement('span')
    const star = estrela(classificacaoProduto, produtos)
    const mens = mensagem(cards,produtos)

    img.src = produtos.imagem
    tituloProduto.textContent = produtos.nome
    descricaoProduto.textContent = produtos.descricao
    precoProduto.textContent = produtos.preco


    produtoImg.appendChild(img)
    detalhesProduto.append(tituloProduto, descricaoProduto, precoProduto, classificacaoProduto)
    cards.append(produtoImg, detalhesProduto)
    containerCards.appendChild(cards)


}

function carregarCards() {
    Produtos.forEach(criarCardsProdutos)
}
carregarCards()