Feature: Login en Sistema ERP

  Background:
    Given Que el usuario registrado accede al sistema ERP

  @positivo @smoke
  Scenario: Acceder al sistema y consultar productos
    Then Debe ver el mensaje "Bienvenido al sistema ERP."
    And En el menú izquierdo selecciona Entidades
    And Dentro de Entidades selecciona Artículos
    Then Debe mostrarse el título "Listado de Artículos"

  @positivo
  Scenario: Validar que la paginación muestra 10 artículos por página
    Then Debe ver el mensaje "Bienvenido al sistema ERP."
    And En el menú izquierdo selecciona Entidades
    And Dentro de Entidades selecciona Artículos
    Then Validar que la paginación esté correcta y se muestren como máximo 10 artículos

