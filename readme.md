Aplicacion de practica de API REST con Express, Mongo y mongoose.

instalar como dev dependencies:
@babel/core

Es el motor principal.

 Es el que realmente transforma el código.

Sin esto, nada funciona.

--------
@babel/cli

Es la herramienta de línea de comandos.

Te permite correr Babel desde la terminal

--------
@babel/node

Es una versión de Node que ejecuta código pasando por Babel automáticamente.
---------
@babel/preset-env

Este es clave.

Es un preset que le dice a Babel:

“Transformá el código según el entorno donde va a correr”.

Ejemplo:

Si tu target es Node 18 → transpila poco.

Si tu target es IE11 → transpila mucho.

Si es Chrome moderno → casi nada.

-------
tenemos que crear un archivo en root llamado .babelrc