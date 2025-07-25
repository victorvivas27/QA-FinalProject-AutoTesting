Feature: Login en Sistema ERP
  Background:
    Given Que el usuario registrado accede al sistema ERP
    
@positivo @smoke
  Scenario Outline: Login exitoso y navegación a artículos
    When Ingresa el email y contraseña
    Then Debe ver el mensaje "<mensaje_bienvenida>"
    And En el menú izquierdo selecciona Entidades
    And Dentro de Entidades selecciona Artículos
    Then Validar que al menos exista un articulo

    Examples:
      | mensaje_bienvenida         |
      | Bienvenido al sistema ERP. |
      
@positivo
  Scenario Outline: Validar que la paginación muestra 10 artículos por página
    When Ingresa el email y contraseña
    Then Debe ver el mensaje "<mensaje_bienvenida>"
    And En el menú izquierdo selecciona Entidades
    And Dentro de Entidades selecciona Artículos
    Then Validar que la paginación esté correcta y se muestren como máximo 10 artículos

    Examples:
      | mensaje_bienvenida         |
      | Bienvenido al sistema ERP. |
      
@negativo @validacion
  Scenario Outline: Login con credenciales inválidas
    When Ingresa el email "<email>" y contraseña "<password>"
    Then debería mostrarse un toast de tipo 'error' con el texto '<mensaje>'

    Examples:
      | email           | password     | mensaje                                          |
      | falso1@test.com | malaClave123 | Las credenciales proporcionadas son incorrectas. |

@negativo @validacion
  Scenario: Login con campos vacíos
    When Ingresa el email "<email>" y contraseña "<password>"
    Then El campo email debe seguir vacío
    Then Debe permanecer en la ruta login


    Examples:
      | email | password     |
      |       | malaClave123 |