Feature: Login en Sistema ERP

  Scenario Outline: Login exitoso y navegación a artículos
    Given El usuario abre la aplicación ERP
    When Ingresa el email y contraseña
    Then Debe ver el mensaje "<mensaje_bienvenida>"
    And En el menú izquierdo selecciona Entidades
    And Dentro de Entidades selecciona Artículos
    Then Validar que al menos exista un articulo

    Examples:
      | mensaje_bienvenida         |
      | Bienvenido al sistema ERP. |

  Scenario Outline: Validar que la paginación muestra 10 artículos por página
    Given El usuario abre la aplicación ERP
    When Ingresa el email y contraseña
    Then Debe ver el mensaje "<mensaje_bienvenida>"
    And En el menú izquierdo selecciona Entidades
    And Dentro de Entidades selecciona Artículos
    Then Validar que la paginación esté correcta y se muestren como máximo 10 artículos

    Examples:
      | mensaje_bienvenida         |
      | Bienvenido al sistema ERP. |

  Scenario Outline: Login con credenciales inválidas
    Given El usuario abre la aplicación ERP
    When Ingresa el email "<email>" y contraseña "<password>"
    Then Debe aparecer un modal con el mensaje "<mensaje_error>"

    Examples:
      | email           | password     | mensaje_error                                    |
      | falso1@test.com | malaClave123 | Las credenciales proporcionadas son incorrectas. |

  Scenario: Login con campos vacíos
    Given El usuario abre la aplicación ERP
    When Ingresa el email "<email>" y contraseña "<password>"
    Then El campo email debe seguir vacío
    Then Debe permanecer en la ruta login


    Examples:
      | email | password     |
      |       | malaClave123 |