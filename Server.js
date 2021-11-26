const app = require('./app')
const http = require('http')


var port = 3000
app.set('port', port)


var server = http.createServer(app);
server.listen(port,()=>{
    console.log(`Server is running on port ${port}.`);
})