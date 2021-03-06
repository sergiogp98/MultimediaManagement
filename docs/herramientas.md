# Herramientas usadas para la elaboración del proyecto
 
## Lenguaje de programación
Para construir mi API, voy a usar el lenguaje [JavaScript](https://www.javascript.com) con su entorno de ejecución en el lado del servidor [Node.js](https://nodejs.org/es/). He decidido usarla ya que este servicio está orientado al lado del servidor, más que del lado del cliente
 
## Base de datos
Para almacenar la información y poder gestionarla voy a implementar el sistema de gestión de base de datos NoSQL [MongoDB](https://www.mongodb.com/es) y su framework específico para Node.js [mongoose](https://mongoosejs.com)
 
## Framework 
Como framework de desarrollo de aplicaciones web usaré el conocido [Express.js](https://expressjs.com/es/) ya que es minimalista y muy flexible
 
## Test
Para que todo proyecto vaya sobre ruedas, es necesario controlar cualquier modificación que se haga sobre el mismo. Estas modificaciones no solo pueden añadir nuevas funcionalidades sino también afectar a las ya implementadas. Para ello son necesarios los tests, para controlar que el resultado de todas las funcionalidades añadidas hasta el momento sean las esperadas. En mi caso, usaré el framework [Jest](https://jestjs.io/). Este framework de test incluye cobertura de código. Para tener ua completa funcionalidad del mismo sustituya en la regla *test* del archivo *package.json* el token (*jest tests && codecov -t \<token>*) por el de su repositorio. Para añadir el token de su repositorio siga este [tutorial](https://www.freecodecamp.org/news/get-your-npm-package-covered-with-jest-and-codecov-9a4cb22b93f4/)
 
## Sistema de logs
Depurar el código es tan importante como su implementación. Para tener todo detalle de los errores que ocurren es necesario tener integrado un sistema de logs y así agilizar la detección y corrección de los mismos. Hay muchos middleware para ello pero en este proyecto usaré [Morgan](https://www.npmjs.com/package/morgan)
 

