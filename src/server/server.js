const http = require('http');
const assert = require('../core/assert/assert.js')

http.createServer((req, res) => {
    res.end('Serve On')

}).listen(process.env.PORT || 3000)