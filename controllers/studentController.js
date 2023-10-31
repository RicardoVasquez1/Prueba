const { response } = require("express");
const Student = require('../models/studentSchema');

const newStudent = async (req, res) => {
    const { name, age } = req.body;

    try {
        const student = new Student({
            name,
            age
        });

        await student.save();

        res.json({
            student
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

module.exports = {
    newStudent
};
