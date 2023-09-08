export const catalogo = [
    { 
        id: "1", 
        marca: 'Zara', 
        nome: 'Camisa Larga com Bolsos', 
        preco: 70, 
        imagem: 'product-1.jpg', 
        feminino: false, 
    }, 
    { 
        id: "2", 
        marca: 'Zara', 
        nome: 'Casaco Reto com Lã', 
        preco: 85, 
        imagem: 'product-2.jpg', 
        feminino: true, 
    }, 
    { 
        id: "3", 
        marca: 'Zara', 
        nome: 'Jaqueta com Efeito Camurça', 
        preco: 60, 
        imagem: 'product-3.jpg', 
        feminino: false, 
    }, 
    { 
        id: "4", 
        marca: 'Zara', 
        nome: 'Sobretudo em Mescla de Lã', 
        preco: 160, 
        imagem: 'product-4.jpg', 
        feminino: false, 
    }, 
    { 
        id: "5", 
        marca: 'Zara', 
        nome: 'Camisa Larga Acolchoada de Veludo Cotelê', 
        preco: 110, 
        imagem: 'product-5.jpg', 
        feminino: false, 
    }, 
    { 
        id: "6", 
        marca: 'Zara', 
        nome: 'Casaco de Lã com Botões', 
        preco: 170, 
        imagem: 'product-6.jpg', 
        feminino: true, 
    }, 
    { 
        id: "7", 
        marca: 'Zara', 
        nome: 'Casaco com Botões', 
        preco: 75, 
        imagem: 'product-7.jpg', 
        feminino: true, 
    }, 
    { 
        id: "8", 
        marca: 'Zara', 
        nome: 'Colete Comprido com Cinto', 
        preco: 88, 
        imagem: 'product-8.jpg', 
        feminino: true, 
    },
    { 
        id: "9", 
        marca: 'Zara', 
        nome: 'Jaqueta Acolchoada Water Repellent', 
        preco: 129, 
        imagem: 'product-9.jpg', 
        feminino: false, 
    },
    { 
        id: "10", 
        marca: 'Zara', 
        nome: 'Colete Com Acabamento Engomado', 
        preco: 159, 
        imagem: 'product-10.jpg', 
        feminino: false, 
    },
    { 
        id: "11", 
        marca: 'Zara', 
        nome: 'Jaqueta Acolchoada', 
        preco: 279, 
        imagem: 'product-11.jpg', 
        feminino: false, 
    },
    { 
        id: "12", 
        marca: 'Zara', 
        nome: 'Casaco De Gola Removível', 
        preco: 599, 
        imagem: 'product-12.jpg', 
        feminino: false, 
    },
    { 
        id: "13", 
        marca: 'Zara', 
        nome: 'Suéter Com Textura De Algodão', 
        preco: 159, 
        imagem: 'product-13.jpg', 
        feminino: false, 
    },
    { 
        id: "14", 
        marca: 'Zara', 
        nome: 'Bota Com Cadarços', 
        preco: 259, 
        imagem: 'product-14.jpg', 
        feminino: false, 
    },
    { 
        id: "15", 
        marca: 'Zara', 
        nome: 'Calça De Poliuretano', 
        preco: 229, 
        imagem: 'product-15.jpg', 
        feminino: true, 
    },
    { 
        id: "16", 
        marca: 'Zara', 
        nome: 'Casaco Comprido De Tricô', 
        preco: 129, 
        imagem: 'product-16.jpg', 
        feminino: true, 
    },
    { 
        id: "17", 
        marca: 'Zara', 
        nome: 'Casaco Aberto De Malha Com Nervuras', 
        preco: 119, 
        imagem: 'product-17.jpg', 
        feminino: true, 
    },
    { 
        id: "18", 
        marca: 'Zara', 
        nome: 'Short-Saia Com Textura', 
        preco: 159, 
        imagem: 'product-18.jpg', 
        feminino: true, 
    },
    { 
        id: "19", 
        marca: 'Zara', 
        nome: 'Camisa com Laço', 
        preco: 159, 
        imagem: 'product-19.jpg', 
        feminino: true, 
    },
    { 
        id: "20", 
        marca: 'Zara', 
        nome: 'Camisa com Laço', 
        preco: 159, 
        imagem: 'product-20.jpg', 
        feminino: true, 
    }
];

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
}

export function desenharProdutoNoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);
  
    const containerProdutosCarrinho = document.getElementById(idContainerHtml);
  
    const elementoArticle = document.createElement('article');
    const articleClasses = ['flex', 'bg-stone-200', 'rounded-lg', 'p-1', 'relative', 'mb-2', 'w-96'];
  
    for(const articleClass of articleClasses) {
      elementoArticle.classList.add(articleClass);
    }
  
    const cartaoProdutoCarrinho = `
    <img 
      src="./assets/img/${produto.imagem}" 
      alt="Carrinho: ${produto.nome}" 
      class="h-24 rounded-lg"
    >
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">${produto.nome}</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">R$${produto.preco},00</p>
    </div>
    <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
      <p id="quantidade-${produto.id}" class="ml-2">${quantidadeProduto}</p>
    </div>`;
  
    elementoArticle.innerHTML = cartaoProdutoCarrinho;
  
    containerProdutosCarrinho.appendChild(elementoArticle);
}

function buscarProdutos() {
    const termoBusca = document.getElementById("busca-produto").value.toLowerCase().trim();
    const containerProduto = document.getElementById("container-produto");

    containerProduto.innerHTML = "";

    // Filtrar produtos com base no termo de busca
    const produtosFiltrados = catalogo.filter((produto) => {
        const nomeLowerCase = produto.nome.toLowerCase();
        const marcaLowerCase = produto.marca.toLowerCase();
        return (
            marcaLowerCase.includes(termoBusca) || produto.id.toString().includes(termoBusca) || nomeLowerCase.includes(termoBusca)
        );
    });

    // Renderizar os produtos filtrados
    for (const produtoCatalogo of produtosFiltrados) {
        const cartaoProduto = `<div class="border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produtoCatalogo.feminino ? 'feminino' : 'masculino'}" id="card-produto-${produtoCatalogo.id}">
            <img 
            src="./assets/img/${produtoCatalogo.imagem}" 
            alt="Produto ${produtoCatalogo.id} do Fashion Live."
            class="group-hover:scale-110 duration-300 my-3 rounded-lg"
            >
            <p class="text-sm">${produtoCatalogo.marca}</p>
            <p class="text-sm">${produtoCatalogo.nome}</p>
            <p class="text-sm">R$ ${produtoCatalogo.preco},00</p>
            <button id="adicionar-${produtoCatalogo.id}" class="bg-slate-950 hover:bg-slate-700 text-slate-200 rounded-md">
                <i class="fa-solid fa-cart-plus"></i>
            </button>
        </div>`;

        containerProduto.innerHTML += cartaoProduto;
    }

    for (const produtoCatalogo of produtosFiltrados) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
    }
    
}

document.getElementById("btn-buscar").addEventListener('click', buscarProdutos);