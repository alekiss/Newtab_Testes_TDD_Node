const assert = require('assert');
var User = require('../src/core/user/user.js')

var admin = new User('admin', '123456')

describe('Testing of authentication', () => {
    it('Testing invalid username', () => {
        expect(assert(!admin.auth('admi', '123456')))
    })
    it('Testing invalid password', () => {
        expect(assert(!admin.auth('admin', '123457')))
    })

    it('Testing valid credentials', () => {
        expect(assert(admin.auth('admin', '123456')))
    })

    it('Testing getName', () => {
        expect(assert(admin.getName() === 'admin'))
    })

    it('Testing getName', () => {
        expect(admin.getName()).toBe('admin')
    })

    it('Testing getPassword', () => {
        expect(admin.getPassword()).toBe('123456')
    })
})