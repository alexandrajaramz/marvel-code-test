# marvel-code-test
Marvel finder for a code test.
To run this project, use `npm start` on the terminal to use it in the development mode.

## Requerimientos
Construir una pequeña aplicación con Api Marvel

#### Requisitos mínimos:
La aplicación deberá contener:
- Buscador de personajes
- Listado de personajes. Al buscar aparecerá el listado de resultados
- Cada personaje tendrá un botón de ver detalles que te lanzará una modal o popup para ver los detalles de dicho personaje

#### Detalles técnicos mínimos:
- Conectar con el Api de Marvel
http://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=${character}&apikey=${key}
- Crear un cliente con ReactJs.
- Maquetación css con flexbox o css grid.
- Alojar el proyecto en github.

## Descripción
La aplicación se divide en los siguientes componentes:
- App: componente principal. Tiene un state que almacena los personajes traídos del api, el personaje buscado y un booleano de loading. Los métodos getCharacters() y searchCharacter(event) realizan la petición y obtienen la query introducida por el usuario, respectivamente, y proceden a setear la info al state. En su método render importa los componentes Filters y CharacterList.
- Filters: input text en el que el usuario escribe el término a buscar. En el evento onChange ejecuta el método que obtiene la query. El icono de búsqueda ejecuta la llamada a api en onClick.
- CharacterList: recibe por props los personajes guardados en el state de App. Renderiza el botón que abre la modal, utilizando el state del componente para mostrar u ocultar la modal y almacenar el personaje clickado.
- Modal: contiene la modal con datos extra.