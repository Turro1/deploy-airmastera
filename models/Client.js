const mongoose = require('mongoose');

const {Schema} = mongoose;

const ClientSchema =new Schema ({

    id: String,
    avatarname: String,
    fullname: String,
    phone: String,

});

ClientSchema.virtual('cars', {
    ref: 'Car',
    localField: '_id',
    foreignField: 'client',
    justOne: false
})

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;