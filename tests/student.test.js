const request = require('supertest');
const app = require('../app');
const Student = require('../models/Student');

// Esto simula la base de datos para estudiantes
jest.mock('../models/Student', () => ({
    findAll: jest.fn().mockResolvedValue([
        { id: 1, codigo: 'STU-01', nombres: 'Arturo', apellidos: 'Carrillo', correo: 'arturo@correo.com', carrera: 'Ingenieria' }
    ])
}));

describe('Pruebas del Microservicio de Estudiantes', () => {
    it('Debería retornar la lista de estudiantes con status 200', async () => {
        const res = await request(app).get('/students');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});