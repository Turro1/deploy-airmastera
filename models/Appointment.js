const mongoose = require('mongoose');

const {Schema} = mongoose;

const AppointmentSchema =new Schema ({

    car: {type: Schema.Types.ObjectId, ref: 'Car'},
    elNumber: String,
    diagnosis: String,
    price: Number,
    date: String,
    time: String

},
{
    timestamps: true
}
);

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;