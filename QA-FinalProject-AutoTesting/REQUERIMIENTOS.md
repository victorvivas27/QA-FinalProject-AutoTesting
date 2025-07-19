# REQUERIMIENTOS DEL PROYECTO FINAL – Test Automation Engineer

Este documento detalla los requerimientos funcionales a ser validados mediante pruebas automatizadas End-to-End (E2E) en las capas de Front-End y Back-End, utilizando herramientas y enfoques aprendidos durante la formación.

---

## 📌 Requerimientos Front-End

**Sitio objetivo:** https://test-adl.leonardojose.dev

Implementar pruebas E2E para las siguientes historias de usuario:

1. ✅ Como usuario registrado, quiero poder acceder al sistema y consultar productos.
2. ✅ Como usuario registrado, quiero registrar un nuevo producto con nombre: **Iphone 16** y otros datos complementarios.
3. ✅ Como usuario registrado, quiero actualizar el producto **Iphone 16** a **Iphone 16 Pro Max** con sus datos.
4. ✅ Como usuario registrado, quiero eliminar el producto **Iphone 16 Pro Max** del sistema.
5. ✅ Como usuario **no registrado**, quiero validar que **no tengo acceso al sistema**.

**Recomendación:** Utilizar Playwright, Cypress o Selenium con enfoque BDD (Cucumber/Gherkin).

---

## 📌 Requerimientos Back-End

**Endpoint base:** https://api-testeradl.leonardojose.dev  
**Documentación API:** https://documenter.getpostman.com/view/1142428/2sB34ijzCx  
 

Validar los siguientes endpoints protegidos:

1. ✅ `POST /api/login` – Validar inicio de sesión.
2. ✅ `GET /api/clients` – Validar consulta general de clientes.
3. ✅ `POST /api/clients` – Verificar creación de un nuevo cliente.
4. ✅ `PUT /api/clients` – Validar actualización de un cliente existente.
5. ✅ `DELETE /api/clients` – Eliminar cliente creado anteriormente.

**Recomendación:** Usar Postman + Newman o Supertest + Jest.

---

## ⭐ Actividad Opcional

Realizar pruebas automatizadas sobre una aplicación móvil de las vistas en clase, incluyendo:

- Selectores
- Acciones (clicks, scroll, input)
- Validaciones de comportamiento

---

## 🎯 Objetivo Final

Entregar un reporte de resultados para cada conjunto de pruebas, con:
- Evidencia de ejecución
- Cobertura de requerimientos
- Riesgos detectados
- Conclusión del estado de calidad del software