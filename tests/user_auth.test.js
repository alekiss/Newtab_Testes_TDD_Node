const{it,describe} = require('mocha')
const assert = require('assert');
var User = require('../src/core/user/user.js')

var admin = new User('admin', '123456')

describe('Testing of authentication', () => {
    it('Testing invalid username', () => {
        assert(!admin.auth('admi', '123456'))
    })
    it('Testing invalid password', () => {
        assert(!admin.auth('admin', '123457'))
    })

    it('Testing valid credentials', () => {
        assert(admin.auth('admin', '123456'))
    })
})