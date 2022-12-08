//creating a server using node js module -http
const http= require('http') //http module from node js
const app = require('./app') //req handler file 

const PORT=7001 || process.env.PORT; //if the process not deployed
const server= http.createServer(app)//act as a request listener-returns a new instance of Server
server.listen(PORT);