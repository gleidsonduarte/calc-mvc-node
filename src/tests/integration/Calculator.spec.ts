import { expect } from 'chai'
import { agent as request } from 'supertest';
import app from '../../app'

const values = { number1:7, number2:2 }

describe("Tests the calculator's route collection", () => {
    it('POST /calculate/sum', async () => {
        const res = await request(app)
            .post('/calculator/sum')
            .send(values)

        expect(res.status).to.equal(200)
        expect(res.body).not.to.be.empty
        expect(res.body.result).to.be.equal(9)
    })

    it('POST /calculate/subtraction', async () => {
        const res = await request(app)
            .post('/calculator/subtraction')
            .send(values)

        expect(res.status).to.equal(200)
        expect(res.body).not.to.be.empty
        expect(res.body.result).to.be.equal(5)
    })

    it('POST /calculate/multiplication', async () => {
        const res = await request(app)
            .post('/calculator/multiplication')
            .send(values)

        expect(res.status).to.equal(200)
        expect(res.body).not.to.be.empty
        expect(res.body.result).to.be.equal(14)
    })

    it('POST /calculate/division', async () => {
        const res = await request(app)
            .post('/calculator/division')
            .send(values)

        expect(res.status).to.equal(200)
        expect(res.body).not.to.be.empty
        expect(res.body.result).to.be.equal(3.5)
    })
})