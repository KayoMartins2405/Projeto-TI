const api_produtos = [
{
    nome: "Combinado Premium",
    Imagem: "/Projeto-TI/static/img/imagem-carrossel1.jpg",
    numPecas: "30 pecas",
    preco: "154,99",
    ingrediente: "Feijão com farinha"
},
{
    nome: "Combinado Premium",
    Imagem: "/Projeto-TI/static/img/imagem-carrossel2.jpg",
    numPecas: "30 pecas",
    preco: "154,99",
    ingrediente: "Feijão com farinha"
},
{
    nome: "Combinado Premium",
    Imagem: "/Projeto-TI/static/img/imagem-carrossel3.jpg",
    numPecas: "30 pecas",
    preco: "154,99",
    ingrediente: "Feijão com farinha"
},
{
    nome: "Combinado Premium",
    Imagem: "/Projeto-TI/static/img/imagem-carrossel4.jpg",
    numPecas: "30 pecas",
    preco: "154,99",
    ingrediente: "Feijão com farinha"
},
]

const container = document.getElementById("cards");

let index = 0;
const itensPorTela = 4;

function renderizar() {
  container.innerHTML = "";

  const slice = api_produtos.slice(index, index + itensPorTela);

  slice.forEach(produto => {
    container.innerHTML += `
      <div class="card">
        <img src="${produto.Imagem}" alt="">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <span>${produto.preco}</span>
        <p>${produto.ingrediente}</p>
        <button>Pedir</button>
      </div>
    `;
  });
}

function avancar() {
  if (index + itensPorTela < produtos.length) {
    index++;
    renderizar();
  }
}

function voltar() {
  if (index > 0) {
    index--;
    renderizar();
  }
}

renderizar();