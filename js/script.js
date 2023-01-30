const assineBotao = document.querySelector(".assine-btn div");
const assineCheck = document.querySelector(".assine-check");
const assineListaCheck = document.querySelectorAll(".assine-check");
const assineLista = document.querySelectorAll(".assine-lista li img");
const assineListaNav = document.querySelectorAll(".oferta-caixa a");

function mudarCheck() {
  console.log(assineLista);
  imgCheck = assineCheck.getAttribute("src");
  if (imgCheck == "img/check-icon-mobile.png") {
    assineListaCheck.forEach((checkBotao) => {
      checkBotao.setAttribute("src", "img/check-icon-mobile-checked.png");
    });
    assineLista.forEach((element) => {
      element.setAttribute("src", "img/check-icon-green.png");
      aplicarDesconto();
    });
  } else if (imgCheck == "img/check-icon-mobile-checked.png") {
    assineListaCheck.forEach((checkBotao) => {
      checkBotao.setAttribute("src", "img/check-icon-mobile.png");
    });
    assineLista.forEach((element) => {
      element.setAttribute("src", "img/check-icon.png");
      aplicarDesconto();
    });
  }
}

function aplicarDesconto() {
  const precoCaixa = document.querySelectorAll(".preco-caixa");
  const precoEconomizado = document.querySelectorAll(".preco-economizado");
  const precoParcelado = document.querySelectorAll(".preco-parcelado");
  const precoVista = document.querySelectorAll(".preco-vista");
  const valorCaixa = precoCaixa[0].getAttribute("value");
  const valorEconomizado = +precoEconomizado[0].getAttribute("value");
  const valorParcelado = precoParcelado[0].getAttribute("value");
  const valorVista = precoVista[0].getAttribute("value");
  if (assineCheck.getAttribute("src") == "img/check-icon-mobile-checked.png") {
    //Preço da caixa
    const valorComDesconto = valorCaixa * 0.9;
    precoCaixa[0].innerText = `R$ ${valorComDesconto.toFixed(2)} por caixa`;
    precoCaixa[1].innerText = `R$ ${valorComDesconto.toFixed(2)} por caixa`;

    //Preço economizado
    const valorEco = (valorCaixa - valorComDesconto) * 3 + valorEconomizado;
    precoEconomizado[0].innerText = `Economize R$ ${valorEco.toFixed(2)}`;
    precoEconomizado[1].innerText = `Economize R$ ${valorEco.toFixed(2)}`;

    //preço parcelado
    const valorPar = valorParcelado * 0.9;
    precoParcelado[0].innerHTML = `HOJE: <span>12x</span> R$ ${valorPar.toFixed(
      2
    )}`;
    precoParcelado[1].innerHTML = `HOJE: <span>12x</span> R$ ${valorPar.toFixed(
      2
    )}`;

    //preço a vista
    const valorVis = valorVista * 0.9;
    precoVista[0].innerText = `ou R$ ${valorVis.toFixed(2)} à vista`;
    precoVista[1].innerText = `ou R$ ${valorVis.toFixed(2)} à vista`;
  } else if (assineCheck.getAttribute("src") == "img/check-icon-mobile.png") {
    //preço da caixa
    const valorComDesconto = valorCaixa;
    precoCaixa[0].innerText = `R$ ${valorComDesconto} por caixa`;
    precoCaixa[1].innerText = `R$ ${valorComDesconto} por caixa`;

    //preço economizado
    const valorEco = valorEconomizado;
    precoEconomizado[0].innerText = `Economize R$ ${valorEco.toFixed(2)}`;
    precoEconomizado[1].innerText = `Economize R$ ${valorEco.toFixed(2)}`;

    //preço parcelado
    const valorPar = valorParcelado;
    precoParcelado[0].innerHTML = `HOJE: <span>12x</span> R$ ${valorPar}`;
    precoParcelado[1].innerHTML = `HOJE: <span>12x</span> R$ ${valorPar}`;

    //preço a vista
    const valorVis = valorVista;
    precoVista[0].innerText = `ou R$ ${valorVis} à vista`;
    precoVista[1].innerText = `ou R$ ${valorVis} à vista`;
  }
}

assineListaNav.forEach((item) => {
  item.addEventListener("click", function () {
    assineListaNav.forEach((i) => {
      if (i != this) {
        i.classList.remove("ativar");
      }
    });
    if (this.getAttribute("class") != "ativar") {
      this.classList.toggle("ativar");
    }
  });
});
