const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Course = sequelize.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    creditos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    docente: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'courses',
    timestamps: false
});

module.exports = Course;