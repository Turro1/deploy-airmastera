const cors = require('cors');
const express = require('express');
const db = require('./core/db');
const carValidation = require('./utils/validations/car');
const clientValidation = require('./utils/validations/client');
const appointmentValidation = require('./utils/validations/appointment');

const {ClientCtrl} = require('./controllers');
const {CarCtrl} = require('./controllers');
const {AppointmentCtrl} = require('./controllers');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/clients', ClientCtrl.all);


app.post('/clients',clientValidation.create, ClientCtrl.create);
app.delete('/clients/:id', ClientCtrl.remove);
app.patch('/clients/:id',clientValidation.create, ClientCtrl.update);
app.get('/clients/:id',ClientCtrl.show);

app.get('/cars', CarCtrl.all);
app.post('/cars', carValidation.create, CarCtrl.create);
app.get('/cars/:id',CarCtrl.show);
app.patch('/cars/:id',carValidation.create, CarCtrl.update);
app.delete('/cars/:id', CarCtrl.remove);

app.get('/appointments', AppointmentCtrl.all);
app.post('/appointments', appointmentValidation.create, AppointmentCtrl.create);
app.delete('/appointments/:id', AppointmentCtrl.remove);
app.patch('/appointments/:id',appointmentValidation.update, AppointmentCtrl.update);

app.listen(80, function(err) {
    if (err) {
        return console.log(err);
    }

    console.log('Server runned!');
})
