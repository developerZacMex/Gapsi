# Gapsi
desarrollo fullstack

para clonar el repositorio
git clone https://github.com/developerZacMex/Gapsi.git

para levantar el server node.js
abrir un bash navegar a la carpeta 
cd server
levantar con:
node index.js

para levantar front react
abrir una terminal y navegar 
cd cliente
se levanta con:
npm start

request desde postman a node.js
Solicitud para agregar un provedor
POST
http://localhost:3001/api/providers

body del json
{
  "name": "Proveedor 2",
  "businessName": "Razón Social 1",
  "address": "Dirección 1"
}

*******************************************
*******************************************
*******************************************
Solicitud para borrar un provedor

DELETE
http://localhost:3001/api/providers/[NOMBRRE]
ejemplo:
http://localhost:3001/api/providers/owen

*******************************************
*******************************************
*******************************************
solicitud para listar los provedores

GET
http://localhost:3001/api/providers
