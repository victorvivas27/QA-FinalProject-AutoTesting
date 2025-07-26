Feature: Registrar un nuevo artículo

  Background:
    Given Que el usuario registrado accede al sistema ERP
    And En el menú izquierdo selecciona Entidades
    And Dentro de Entidades selecciona Artículos


  @positivo @smoke
  Scenario Outline: Crear un nuevo artículo
    When vamos a "Crear Artículo"
    And completa el formulario con los siguientes datos:
      | Código (SKU)     | <codigo>        |
      | Stock Actual     | <stock>         |
      | Precio de venta  | <precio>        |
      | Descripción      | <descripcion>   |
      | Costo            | <costo>         |
      | Unidad de Medida | <unidad_medida> |
    And Campos correctos "Guardar Cambios"
    Then debería redirigirse al listado de artículos
    And debería mostrarse un toast de tipo 'info' con el texto '<mensaje>'

    Examples:
      | codigo    | stock | precio | descripcion                             | costo  | unidad_medida | mensaje                                                              |
      | IPH16-002 | 1     | 999    | iPhone 16 Pantalla 6.1", 256GB, 8GB RAM | 699.99 | Unidad        | Articulo "iPhone 16 Pantalla 6.1", 256GB, 8GB RAM" creado con éxito! |

  @negativo @validacion
  Scenario: Intentar guardar artículo con todos los campos vacíos
    When vamos a "Crear Artículo"
    And Campos correctos "Guardar Cambios"
    Then deberia permanecer en la ruta articulos nuevo
    And deberían mostrarse errores de validación requeridos
    Then ⚠️ Observación para el equipo de desarrollo:
      """
      Si el campo 'Código (SKU)' está vacío, el sistema debe impedir el guardado
      y mostrar un mensaje de validación claro. Actualmente no se valida correctamente.
      """

  @negativo @validacion
  Scenario: Guardar artículo sin Código (SKU)
    When vamos a "Crear Artículo"
    And completa el formulario con los siguientes datos:
      | Stock Actual     | 10           |
      | Precio de venta  | 1500         |
      | Descripción      | iPhone falso |
      | Costo            | 1000         |
      | Unidad de Medida | Unidad       |
    And Campos correctos "Guardar Cambios"
    Then NO debería guardarse el artículo
    And si el artículo con descripción "iPhone falso" existe, lo elimino
    And ⚠️ Observación para el equipo de desarrollo:
      """
      Si el campo 'Código (SKU)' está vacío, el sistema debe impedir el guardado
      y mostrar un mensaje de validación claro. Actualmente no se valida correctamente.
      """


  @negativo @validacion
  Scenario: Guardar artículo sin descripción
    When vamos a "Crear Artículo"
    And completa el formulario con los siguientes datos:
      | Código (SKU)     | IPH16-001 |
      | Stock Actual     | 5         |
      | Precio de venta  | 1200      |
      | Costo            | 900       |
      | Unidad de Medida | Caja      |
    And Campos correctos "Guardar Cambios"
    Then deberia permanecer en la ruta articulos nuevo
    And debería mostrarse un toast de tipo 'info' con el texto 'El campo descripción es requerido'
    And ⚠️ Observación para el equipo de desarrollo:
      """
      Si la descripción está vacía, el sistema debe informar al usuario con un mensaje claro.
      Actualmente no aparece ningún mensaje visible en la interfaz.
      """