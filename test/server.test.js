const request = require('supertest');
const app = require('../server'); // Import your Express app

describe('GET /', () => {
    it('should return status 200 and "Hello World!"', async () => {
        const response = await request(app).get('/');
        
        // Assertions
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});