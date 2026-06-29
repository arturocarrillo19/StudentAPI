const request = require('supertest');
const app = require('../app');
const Course = require('../models/Course');

// Esto simula la base de datos para que no intente conectarse de verdad durante el test
jest.mock('../models/Course', () => ({
    findAll: jest.fn().mockResolvedValue([
        { id: 1, codigo: 'INF-01', nombre: 'Desarrollo Web', creditos: 4, docente: 'Ing. Carlos Pérez' }
    ])
}));

describe('Pruebas del Microservicio de Cursos', () => {
    it('Debería retornar la lista de cursos con status 200', async () => {
        const res = await request(app).get('/courses');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});