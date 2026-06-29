const Course = require('../models/Course');

// 1. Listar todos los cursos
exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los cursos",
            error: error.message
        });
    }
};

// 2. Consultar un curso por ID
exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (!course) {
            return res.status(404).json({ mensaje: "Curso no encontrado" });
        }
        res.json(course);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener el curso",
            error: error.message
        });
    }
};

// 3. Registrar un nuevo curso
exports.createCourse = async (req, res) => {
    try {
        const { codigo, nombre, creditos, docente } = req.body;
        const nuevoCurso = await Course.create({ codigo, nombre, creditos, docente });
        res.status(201).json({
            mensaje: "Curso registrado correctamente",
            curso: nuevoCurso
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al registrar el curso",
            error: error.message
        });
    }
};

// 4. Actualizar un curso
exports.updateCourse = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (!course) {
            return res.status(404).json({ mensaje: "Curso no encontrado" });
        }
        await course.update(req.body);
        res.json({
            mensaje: "Curso actualizado correctamente",
            course
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar el curso",
            error: error.message
        });
    }
};

// 5. Eliminar un curso
exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (!course) {
            return res.status(404).json({ mensaje: "Curso no encontrado" });
        }
        await course.destroy();
        res.json({ mensaje: "Curso eliminado correctamente" });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar el curso",
            error: error.message
        });
    }
};