import * as express from "express"
import * as supertest from "supertest"

const server = require('../src/server')

describe('server.ts', () => {
    it('/test01 route exists', async(done) => {
        const reqtest = supertest(server)
        const response = await reqtest.get("/")
        expect(response.status).toBe(200)
        done()
    })
})