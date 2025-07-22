import { remote } from 'webdriverio';
import LoginPage from '../pages/LoginPage.js';
import BusquedaPage from '../pages/BusquedaPage.js';
import AgregarAlCarritoPage from '../pages/AgregarAlCarritoPage.js';
import CarritoPage from '../pages/CarritoPage.js';
import { wdOpts } from '../configs/appium.config.js';

let driver;
let loginPage;
let busquedaPage;
let agregarAlCarritoPage;
let carritoPage;

before(async () => {
  driver = await remote(wdOpts);
  loginPage = new LoginPage(driver);
  busquedaPage = new BusquedaPage(driver);
  agregarAlCarritoPage = new AgregarAlCarritoPage(driver);
  carritoPage = new CarritoPage(driver);
});

after(async () => {
  await driver.deleteSession();
});


describe('Validando login de la app', () => {
  it('Dado que ingreso usuario y contraseña válidos', async () => {
    await loginPage.login('admin@example.com', 'admin123');
    /*  const textoTitulo = await loginPage.tituloCatalogo.getText();
     expect(textoTitulo).toBe('Catálogo'); */
    expect(await (await loginPage.tituloCatalogo).isDisplayed()).toBe(true);
  });

  it('Validando búsqueda de productos', async () => {
    await busquedaPage.buscarProducto('Tablet');
    const resultado = await busquedaPage.nombreProducto;
    const resultadoTexto = await resultado.getText();
    expect(resultadoTexto).toContain('Tablet Lite 10"');

  });

  it('Validando agregar producto al carrito', async () => {
    const messageText = await agregarAlCarritoPage.agregar();
    expect(messageText).toBe('Tablet Lite 10" ha sido añadido al carrito.');
  });
  it('Validando contenido del carrito', async () => {
    await carritoPage.abrir();
    const total = await carritoPage.obtenerTotal();
    expect(total).toBe('$450.00');
  });
});


