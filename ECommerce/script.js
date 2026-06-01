const containerCarrinho = document.querySelector(".containercarrinho");
const botoesCarrinho = document.querySelectorAll(".btncarrinho");

const formatarMoeda = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
});

let carrinho = carregarCarrinho();

function carregarCarrinho() {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
}

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function extrairPreco(textoPreco) {
    return Number(
        textoPreco
            .replace("R$", "")
            .replace(/\./g, "")
            .replace(",", ".")
            .trim()
    );
}

function obterDadosProduto(cardProduto) {
    return {
        nome: cardProduto.querySelector("h3").textContent.trim(),
        preco: extrairPreco(
            cardProduto.querySelector("h4").textContent
        )
    };
}

function adicionarProduto(produto) {

    const existente = carrinho.find(
        item => item.nome === produto.nome
    );

    if (existente) {
        existente.quantidade++;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }

    atualizarCarrinho();
}

function removerProduto(nome) {

    const indice = carrinho.findIndex(
        item => item.nome === nome
    );

    if (indice === -1) return;

    carrinho[indice].quantidade--;

    if (carrinho[indice].quantidade <= 0) {
        carrinho.splice(indice, 1);
    }

    atualizarCarrinho();
}

function calcularResumo() {

    return carrinho.reduce((acc, item) => {

        acc.valorTotal += item.preco * item.quantidade;
        acc.totalItens += item.quantidade;

        return acc;

    }, {
        valorTotal: 0,
        totalItens: 0
    });
}

function renderizarCarrinho() {

    containerCarrinho.innerHTML = "";

    carrinho.forEach(item => {

        const subtotal = item.preco * item.quantidade;

        const card = document.createElement("div");
        card.classList.add("itemcarrinho");

        card.innerHTML = `
            <h3>${item.nome}</h3>

            <h6>
                [Quantidade:
                <strong>${item.quantidade}</strong> ]
            
                [${item.quantidade} ×
                ${formatarMoeda.format(item.preco)}]
            
                [Subtotal:
                <strong>
                    ${formatarMoeda.format(subtotal)}
                </strong>]
            </h6>

            <button class="btncarrinho">
               <h5> Remover </h5>
            </button>
        `;

        card
            .querySelector(".btncarrinho")
            .addEventListener("click", () => {
                removerProduto(item.nome);
            });

        containerCarrinho.appendChild(card);
    });

    renderizarResumo();
}

function renderizarResumo() {

    let resumo = document.querySelector(".resumo-carrinho");

    if (!resumo) {
        resumo = document.createElement("div");
        resumo.classList.add("resumo-carrinho");
        document
            .querySelector(".right-panel")
            .appendChild(resumo);
    }

    const { valorTotal, totalItens } = calcularResumo();

    resumo.innerHTML = `
        <hr>

        <h3>Resumo</h3>

        <p>
            Produtos diferentes:
            <strong>${carrinho.length}</strong>
        </p>

        <p>
            Itens no carrinho:
            <strong>${totalItens}</strong>
        </p>

        <p>
            Total:
            <strong>
                ${formatarMoeda.format(valorTotal)}
            </strong>
        </p>
    `;
}

function atualizarCarrinho() {
    salvarCarrinho();
    renderizarCarrinho();
}

botoesCarrinho.forEach(botao => {

    botao.addEventListener("click", () => {

        const cardProduto = botao.closest(".item");

        const produto = obterDadosProduto(cardProduto);

        adicionarProduto(produto);

    });

});

renderizarCarrinho();