Feature: Registrar un nuevo artículo

  Background:
    Given El usuario abre la aplicación ERP
    When Ingresa el email y contraseña
    And En el menú izquierdo selecciona Entidades
    And Dentro de Entidades selecciona Artículos


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
    And debería aparecer un modal con el mensaje '<mensaje>'

    Examples:
      | codigo    | stock | precio | descripcion                             | costo  | unidad_medida | mensaje                                                              |
      | IPH16-004 | 1     | 999    | iPhone 16 Pantalla 6.1", 256GB, 8GB RAM | 699.99 | Unidad        | Articulo "iPhone 16 Pantalla 6.1", 256GB, 8GB RAM" creado con éxito! |

  @negativo
  Scenario: Intentar guardar artículo con todos los campos vacíos
    When vamos a "Crear Artículo"
    And Campos correctos "Guardar Cambios"
    Then deberia permanecer en la ruta articulos nuevo
    And deberían mostrarse errores de validación requeridos
    And ⚠️ Si todos los campos están vacíos, el sistema debe mostrar mensajes de validación para cada campo requerido.

  @negativo
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
    And ⚠️ Si el código (SKU) está vacío, el sistema debe mostrar un mensaje de error y evitar el guardado.


  @negativo
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
    And  debería aparecer un modal con el mensaje "El campo descripción es requerido"
    And ⚠️ Si la descripción está vacía, el sistema debe mostrar al menos un mensaje para informar al usuario.