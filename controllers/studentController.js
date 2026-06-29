const Student = require("../models/Student");

// Obtener todos los estudiantes
exports.getStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener estudiantes",
            error: error.message
        });
    }
};

// Obtener un estudiante por ID
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);

        if (!student) {
            return res.status(404).json({
                mensaje: "Estudiante no encontrado"
            });
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al buscar estudiante",
            error: error.message
        });
    }
};

// Crear estudiante
exports.createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);

        res.status(201).json({
            mensaje: "Estudiante creado correctamente",
            student
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear estudiante",
            error: error.message
        });
    }
};

// Actualizar estudiante
exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);

        if (!student) {
            return res.status(404).json({
                mensaje: "Estudiante no encontrado"
            });
        }

        await student.update(req.body);

        res.json({
            mensaje: "Estudiante actualizado correctamente",
            student
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar estudiante",
            error: error.message
        });
    }
};

// Eliminar estudiante
exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);

        if (!student) {
            return res.status(404).json({
                mensaje: "Estudiante no encontrado"
            });
        }

        await student.destroy();

        res.json({
            mensaje: "Estudiante eliminado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar estudiante",
            error: error.message
        });
    }
};