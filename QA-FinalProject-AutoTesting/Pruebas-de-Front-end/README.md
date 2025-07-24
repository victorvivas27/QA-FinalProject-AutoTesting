# 🧪 QA Final Project - Pruebas de Front-end

Este proyecto contiene pruebas automatizadas E2E para una aplicación ERP, utilizando **Playwright**, **Cucumber** y **Gherkin**.

---

## 🚀 Tecnologías usadas

- [Playwright](https://playwright.dev/)
- [Cucumber](https://github.com/cucumber/cucumber-js)
- [Gherkin](https://cucumber.io/docs/gherkin/)

---

## 📦 Clonar el repositorio

```bash
git clone https://github.com/victorvivas27/QA-FinalProject-AutoTesting.git
cd QA-FinalProject-AutoTesting/Pruebas-de-Front-end
npm install
```

---

## ⚠️ Configuración requerida

Antes de ejecutar las pruebas, **NO OLVIDES CREAR UN ARCHIVO `.env`** en la raíz del proyecto con las siguientes variables:

```env
ERP_EMAIL=tu_email_erp@test.com
ERP_PASSWORD=tu_password_segura
```

---

## ▶️ Ejecutar pruebas

### 🔹Ejecutar todas las pruebas en orden y generar reporte

```bash
npm run e2e
```

### 🔹 Ejecutar un archivo `.feature` específico

```bash
npx cucumber-js features/01_login.feature
```

### 🔹 Ejecutar un escenario específico con etiqueta `@focus`

Agregá `@focus` arriba de un `Scenario` en el archivo `.feature` y luego ejecutá:

```bash
npx cucumber-js --tags @focus
```

---

## 📊 Reportes

Después de ejecutar las pruebas, podés generar y abrir el reporte HTML con:

```bash
 npm run report
```

El reporte se guardará en: `reports/html/index.html`

---

## 📁 Estructura del proyecto

```
📁 Pruebas-de-Front-end
├── .env
├── cucumber.js
├── playwright.config.js
├── package.json
├── features/             → Archivos .feature (escenarios Gherkin)
├── selectors/            → Selectores centralizados por sección
├── step_definitions/     → Definiciones de pasos (login, artículos, etc.)
├── support/              → Hooks y configuración global
├── tests/                → Utilidades y pruebas internas
├── reports/              → Reportes generados (video, HTML)
└── README.md
```

---

## 👤 Autor

**Victor Javier Vivas**  
🔗 [GitHub](https://github.com/victorvivas27)  
📅 Proyecto Final - Desafío Latam - Automation Testing