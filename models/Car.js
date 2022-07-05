const mongoose = require('mongoose');

const {Schema} = mongoose;

const CarSchema =new Schema ({
 
    client: {type: Schema.Types.ObjectId, ref: 'Client'},
    avatar: String,
    carname: String,
    carmodel: String,
    carnumber: String
    
}/*,
{
    timestamps: true
}*/
);

CarSchema.virtual('appointments', {
    ref: 'Appointment',
    localField: '_id',
    foreignField: 'car',
    justOne: false
})

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;