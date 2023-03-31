const inputItem = document.getElementById("inputItem");
const btAdicionar = document.getElementById("btAdicionar");
const lista = document.getElementById("lista");

let listaItems = [];

const redesenhaLista = (lista, listaItems) => {
    lista.innerHTML = "";
    for (let index = 0; index < listaItems.length; ++index) {
        const itemText = document.createTextNode(listaItems[index]);
        const listaItem = document.createElement("li");
        listaItem.appendChild(itemText);
        lista.appendChild(listaItem);
    }
};

const handleAdicionarClick = () => {
    const item = inputItem.value;
    if (!item) {
        alert("Necessário digitar item!");
        return;
    }

    listaItems.push(item);
    inputItem.value = "";
    inputItem.focus();
    redesenhaLista(lista, listaItems);

};

const handleBtLimparClick = () => {
    listaItems = [];
    lista.innerHTML = "";
    inputItem.focus();
  };

btAdicionar.onclick = handleAdicionarClick;
btLimpar.onclick = handleBtLimparClick;