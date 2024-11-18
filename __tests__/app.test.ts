import request from 'supertest'
import app from '../app'

describe('/api', () => {
    test('GET: 200 - returns something', () => {
        return request(app)
        .get('/api')
        .expect(200)
        .then(({body}) => {
            expect(body).toEqual({working: true})
        })
    })
})