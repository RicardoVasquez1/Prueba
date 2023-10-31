const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
app.use(express.json());
require('dotenv').config();
const StudentController = require('./controllers/studentController');


const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_KEY, {
            useNewUrlParser: true,
            useUnifiedTopology: true // Agregado para evitar un warning
        });
        console.log("Conexión Exitosa");
    } catch (error) {
        console.error(error);
    }
};

connectionDB();

app.post("/students", StudentController.newStudent);

app.get('/', (req, res) => {
    res.send("Hola")
});

app.get('/home', (req, res) => {
    res.send('This is Home')
});

app.get('/logout', (req, res) => {
    res.send('Goodbye!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});



//traer un delete, un update,