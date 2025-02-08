# Gapsi
desarrollo fullstack

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
