Feature: Eliminar un artículo

  Background:
    Given Que el usuario registrado accede al sistema ERP
    When Ingresa el email y contraseña
    And En el menú izquierdo selecciona Entidades
    And Dentro de Entidades selecciona Artículos
    
  @positivo
  Scenario Outline: Eliminar el artículo <articulo>
    And voy al ícono de la papelera con el codigo "<codigo>"
    Then debería mostrarse un toast de tipo 'info' con el texto '<mensaje>'
    And El artículo "<codigo>" ya no debería estar en la lista

    Examples:
      | codigo    | articulo                                        | mensaje                       |
      | IPH16-002 | iPhone 16 Pro Max Pantalla 6.1", 256GB, 8GB RAM | Artículo eliminado con éxito. |

  @negativo
  Scenario Outline: No aparece el toast de confirmación al intentar eliminar el artículo <articulo>
    When vamos a "Crear Artículo"
    And completa el formulario con los siguientes datos:
      | Código (SKU)     | <codigo>      |
      | Stock Actual     | 1             |
      | Precio de venta  | 999           |
      | Descripción      | <descripcion> |
      | Costo            | 699.99        |
      | Unidad de Medida | Unidad        |
    And Campos correctos "Guardar Cambios"
    Then debería redirigirse al listado de artículos
    And debería mostrarse un toast de tipo 'info' con el texto 'Articulo "<descripcion>" creado con éxito!'
    When voy al ícono de la papelera con el codigo "<codigo>"
    Then debería mostrarse un toast de tipo 'info' con el texto '<mensaje>'
    And ⚠️ Observación para el equipo de desarrollo:
      """
      Actualmente, al hacer clic en el ícono de la papelera, el sistema elimina el artículo de inmediato,
      sin mostrar ningún mensaje de confirmación (toast o modal).

      Aunque el comportamiento puede ser intencional, sugerimos considerar la implementación
      de una confirmación previa (como un toast o modal) para evitar eliminaciones accidentales.

      Esto mejoraría la experiencia del usuario y alinearía el flujo con prácticas comunes en sistemas CRUD.
      """
    Examples:
      | codigo    | descripcion                                     | mensaje                                          |
      | IPH16-002 | iPhone 16 Pro Max Pantalla 6.1", 256GB, 8GB RAM | ¿Estás seguro que deseas eliminar este artículo? |