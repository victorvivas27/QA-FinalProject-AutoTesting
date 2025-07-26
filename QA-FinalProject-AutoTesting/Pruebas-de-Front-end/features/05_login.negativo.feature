Feature: Validaciones negativas de login

  Background:
    Given Estoy en la página de login

  @negativo @validacion
  Scenario Outline: Login con credenciales inválidas
    When Ingresa el email "<email>" y contraseña "<password>"
    Then debería mostrarse un toast de tipo 'error' con el texto "<mensaje>"
    And Debe permanecer en la ruta login

    Examples:
      | email           | password     | mensaje                                          |
      | falso1@test.com | malaClave123 | Las credenciales proporcionadas son incorrectas. |

  @negativo @validacion
  Scenario Outline: Login con campos vacíos
    When Ingresa el email "<email>" y contraseña "<password>"
    Then El campo email debe seguir vacío
    And Debe permanecer en la ruta login

    Examples:
      | email | password     |
      |       | malaClave123 |