const request = require('supertest');
const app = require('../app');
// const baseURL = "http://localhost:8000"
const dotenv = require("dotenv");
dotenv.config();

describe("API get all cars", () => {
    it("success get all data cars", async () => {
        const response = await request(app).get('/v1/cars')
        expect(response.statusCode).toBe(200);
    });
});

describe("API get car By ID", () => {
    it("success get data car", async () => {
        const response = await request(app).get('/v1/cars/20')
        expect(response.statusCode).toBe(200);
    });
});


