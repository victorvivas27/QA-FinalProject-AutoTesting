
module.exports = {
  btnEntidades: 'li.mb-2:nth-child(2) > div:nth-child(1) > div:nth-child(1)',
  btnArticulos: '[href="/articulos"]',
  tituloListaArticulos: '.text-2xl',
  tablaArticulos: 'div > table',
  getBtnEditarPorCodigo: (codigo) =>
    `xpath=//tr[td[text()="${codigo}"]]//button[contains(@class, "text-indigo-600")]`,
  getBtnEliminarPorValor: (valor) =>
    `xpath=//tr[td[contains(text(),"${valor}")]]//button[contains(@class, "text-red-600")]`
}