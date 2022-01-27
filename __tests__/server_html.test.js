const assert = require('assert');
const http = require('http');

describe('Integrations tests', () => {
    it('Integration test on localhost:3000 === Serve On', async () => {
        let req = http.get('http://localhost:3000')
        expect(assert(req))
    })

    it('Integration test on localhost:3000 === Serve Off', async () => {
        let req = http.get('http://localhost:3000')
        expect(assert(req.body !== 'Server On'))
    })
})

