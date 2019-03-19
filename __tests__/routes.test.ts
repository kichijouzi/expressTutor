import * as express from "express"
import * as supertest from "supertest"

const server = require('../src/server')

describe('server.ts', () => {
    it('/ route exists', async(done) => {
        const reqtest = supertest(server)
        const response = await reqtest.get("/")
        expect(response.status).toBe(200)
        done()
    })

    it('/hello route exists', async(done) => {
        const reqtest = supertest(server)
        const response = await reqtest.get("/hello")
        expect(response.status).toBe(200)
        done()
    })
})

describe('test01 route', () => {
    it('/ route exists', async(done) => {
        const reqtest = supertest(server)
        const response = await reqtest.get("/test01")
        expect(response.status).toBe(200)
        done()
    })

})