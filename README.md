# Proyecto Capstone - Frontend en React

Este proyecto corresponde a la interfaz cliente desarrollada en React + Vite para el proyecto capstone del curso.

## Endpoints Consumidos
- `GET https://jsonplaceholder.typicode.com/posts`: Se consumió este endpoint de prueba para simular los datos de la página principal mientras se implementa la API backend en Django REST Framework.

## Manejo de Estados
- `cargando` (useState): Controla la pantalla de espera mientras se realiza la llamada asíncrona mediante `fetch`.
- `error` (useState): Captura fallos de red o HTTP mediante `try/catch` para ofrecer retroalimentación al usuario.

## Mapa de Componentes
- `App`: Componente contenedor principal.
  - `Home`: Página de inicio que obtiene y renderiza la lista de elementos simulados.
