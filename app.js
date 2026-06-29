const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes'); // Nueva línea

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ mensaje: "Student & Course API funcionando" });
});

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes); // Nueva línea

module.exports = app;