const renderSpace = document.getElementById("render");

async function fetchData() {
    try {
        const response = await fetch("data/data.json");
        if (!response.ok) {
            throw new Error(
                `Erro ao carregar o arquivo JSON: ${response.statusText}`
            );
        }

        const data = await response.json();

        renderUserInfo(data.nome, data.idade, data.email, data.pais);
        renderUserEndereco(data.enderecos);
        renderUserTel(data.telefones);
    } catch (error) {
        console.log("Erro ao ler o arquivo JSON: ", error);
    }
}

function criarElemento(tag, className, text) {
    const elemento = document.createElement(tag);
    elemento.className = className;
    elemento.textContent = text;

    return elemento;
}

function renderUserInfo(nome, idade, email, pais) {
    const card = criarElemento("div", "card");

    const descricaoCard = criarElemento("h3", "", "Informações do usuário");

    const nomeP = criarElemento("p", "card-item", `Nome: ${nome}`);
    const idadeP = criarElemento("p", "card-item", `Idade: ${idade}`);
    const emailP = criarElemento("p", "card-item", `Email: ${email}`);
    const paisP = criarElemento("p", "card-item", `País: ${pais}`);

    card.append(descricaoCard, nomeP, idadeP, emailP, paisP);
    renderSpace.appendChild(card);
}

function renderUserEndereco(enderecos) {
    enderecos.forEach((item, index) => {
        const card = criarElemento("div", "card");

        const descricaoCard = criarElemento("h3", "", `Endereço ${index + 1}`);

        const cepP = criarElemento("p", "card-item", `CEP: ${item.cep}`);
        const cidadeP = criarElemento(
            "p",
            "card-item",
            `Cidade: ${item.cidade}`
        );
        const ruaP = criarElemento("p", "card-item", `Rua: ${item.rua}`);
        const numeroP = criarElemento(
            "p",
            "card-item",
            `Número: ${item.numero}`
        );

        card.append(descricaoCard, cepP, cidadeP, ruaP, numeroP);
        renderSpace.appendChild(card);
    });
}

function renderUserTel(telefones) {
    telefones.forEach((item, index) => {
        const card = criarElemento("div", "card");

        const descricaoCard = criarElemento("h3", "", `Telefone ${index + 1}`);

        const tipoP = criarElemento("p", "card-item", `Tipo: ${item.tipo}`);
        const numeroP = criarElemento(
            "p",
            "card-item",
            `Número: ${item.numero}`
        );

        card.append(descricaoCard, tipoP, numeroP);
        renderSpace.appendChild(card);
    });
}

fetchData();
