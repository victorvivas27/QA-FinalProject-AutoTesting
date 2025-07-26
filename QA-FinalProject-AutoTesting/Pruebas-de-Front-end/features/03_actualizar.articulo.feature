Feature: Actualizar un articulo existente

  Background:
    Given Que el usuario registrado accede al sistema ERP
    And En el menú izquierdo selecciona Entidades
    And Dentro de Entidades selecciona Artículos

  @positivo
  Scenario Outline: Actualizar el artículo iPhone 16 a iPhone 16 Pro Max
    And voy al ícono del lápiz con el codigo "<codigo>"
    And completa el formulario con los siguientes datos:
      | Código (SKU)     | <codigo>        |
      | Stock Actual     | <stock>         |
      | Precio de venta  | <precio>        |
      | Descripción      | <descripcion>   |
      | Costo            | <costo>         |
      | Unidad de Medida | <unidad_medida> |
    And Campos correctos "Guardar Cambios"
    Then no debería estar en la ruta de edición
    And debería mostrarse un toast de tipo 'info' con el texto '<mensaje>'
    Examples:
      | codigo    | stock | precio | descripcion                                     | costo  | unidad_medida | mensaje                                                                           |
      | IPH16-002 | 2     | 1000   | iPhone 16 Pro Max Pantalla 6.1", 256GB, 8GB RAM | 890.00 | Caja          | Artículo "iPhone 16 Pro Max Pantalla 6.1", 256GB, 8GB RAM" actualizado con éxito! |

  @negativo @cancelar
  Scenario: Cancelar la edición de un artículo
    And voy al ícono del lápiz con el codigo "IPH16-002"
    And modifica el campo Precio de venta a "999999"
    And podemos "Cancelar" la actualización
    Then debería ver que el artículo "iPhone 16 Pro Max Pantalla 6.1" aún tiene el precio original "1000"

  @negativo @validacion
  Scenario: Validar longitud máxima del campo Stock Actual
    And voy al ícono del lápiz con el codigo "IPH16-002"
    And modifica el campo Stock Actual a "1111111111"
    And Campos correctos "Guardar Cambios"
    Then debería mostrarse un toast de tipo "error" con el texto "El Stock Actual debe tener como minimo 9 caracteres"
    And ⚠️ Observación para el equipo de desarrollo:
      """
      Se detectó un bug en la validación del campo 'Stock Actual'.
      El sistema permite guardar valores largos como "1111111111",
      pero si se aumenta un dígito más, el guardado falla silenciosamente.

      Esto evidencia una falta de control adecuado en los límites máximos de este campo.
      Recomendamos aplicar una validación clara y consistente que:
      - Defina un máximo de caracteres aceptado (por ejemplo, 9).
      - Muestre un mensaje de error específico cuando se exceda ese límite.
      - No permita fallos silenciosos ni errores genéricos como "Error al guardar el artículo".
      """