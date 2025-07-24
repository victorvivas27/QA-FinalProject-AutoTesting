Feature: Actualizar un articulo existente

  Background:
    Given El usuario abre la aplicación ERP
    When Ingresa el email y contraseña
    And En el menú izquierdo selecciona Entidades
    And Dentro de Entidades selecciona Artículos

  @positivo
  Scenario Outline: Actualizar el artículo iPhone 16 a iPhone 16 Pro Max
    And voy al icono de lápiz del artículo
    And completa el formulario con los siguientes datos:
      | Código (SKU)     | <codigo>        |
      | Stock Actual     | <stock>         |
      | Precio de venta  | <precio>        |
      | Descripción      | <descripcion>   |
      | Costo            | <costo>         |
      | Unidad de Medida | <unidad_medida> |
    And Campos correctos "Guardar Cambios"
    Then no debería estar en la ruta de edición
    And debería aparecer un modal con el mensaje '<mensaje>'
    Examples:
      | codigo    | stock | precio | descripcion                                     | costo  | unidad_medida | mensaje                                                                           |
      | IPH16-002 | 2     | 1000   | iPhone 16 Pro Max Pantalla 6.1", 256GB, 8GB RAM | 890.00 | Caja          | Artículo "iPhone 16 Pro Max Pantalla 6.1", 256GB, 8GB RAM" actualizado con éxito! |

  @negativo @cancelar
  Scenario: Cancelar la edición de un artículo
    And voy al icono de lápiz del artículo
    And modifica el campo Precio de venta a "999999"
    And podemos "Cancelar" la actualización
    Then debería ver que el artículo "iPhone 16" aún tiene el precio original "1000"

  @negativo @validacion
  Scenario: Validar longitud mínima del campo Código
    And voy al icono de lápiz del artículo
    And modifica el campo Código a "1"
    And Campos correctos "Guardar Cambios"
    Then debería mostrarse un toast de tipo "error" con el texto "El código debe tener al menos 3 caracteres"
    And ⚠️ Observación para el equipo de desarrollo:
      """
      Se detectó un bug en la validación del campo 'Código (SKU)'.
      El sistema NO permite guardar códigos como "1" o "2" (un solo número),
      pero SÍ permite "3", "12", "abc", "w", etc.

      Esto sugiere una validación inconsistente o incompleta.
      Recomendamos aplicar una regla de mínimo 3 caracteres
      y validar tanto números como letras por igual.
      """