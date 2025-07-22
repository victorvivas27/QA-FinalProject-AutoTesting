# 📱 Automatización Mobile con WebDriverIO + Appium

Este proyecto contiene pruebas automatizadas para una aplicación Android (`ECommerce.apk`) utilizando **WebDriverIO**, **Appium** y **Allure** para reportería visual.

---
## 📦 Requisitos
Antes de comenzar, asegurate de tener instalado:

- Node.js (v18+)
- Java JDK (v11 o superior)
- Android Studio
  - Con un emulador creado (ej: **Medium Phone**)
- Git (para clonar el proyecto)

> ⚠️ Appium y WebDriverIO están integrados y se ejecutan automáticamente desde los scripts.

---
## 🚀 Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/victorvivas27/QA-FinalProject-AutoTesting.git
   cd QA-FinalProject-AutoTesting/Pruebas-de-Mobile
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

---
## ▶️ Ejecutar pruebas

1. Asegurate de tener un emulador Android encendido.

2. Ejecutar las pruebas:

   ```bash
   npm run test
   ```

Esto hará lo siguiente:

- Inicia Appium automáticamente.
- Ejecuta los test ubicados en `/tests`.
- Genera los resultados en `/allure-results`.

---

## 📊 Generar y ver reporte Allure
1. Generar el reporte HTML:

   ```bash
   npm run allure:generate
   ```

2. Abrir el reporte en el navegador:

   ```bash
   npm run allure:open
   ```

> ℹ️ Por defecto los resultados se acumulan. Si querés limpiar los anteriores antes de correr las pruebas:

```bash
npm run clean:allure && npm run test
```

---

## 📁 Estructura del proyecto

```
Pruebas-de-Mobile/
├── configs/           # Configuraciones externas (capabilities)
├── tests/             # Casos de prueba
├── pages/             # Page Objects
├── wdio.conf.js       # Config principal WebDriverIO
├── allure-results/    # Resultados brutos (JSON)
├── allure-report/     # Reporte HTML generado
```

---
## 👤 Autor

**Victor Javier Vivas**  
🔗 [GitHub](https://github.com/victorvivas27)  
📅 Proyecto Final - Desafío Latam - Automation Testing
