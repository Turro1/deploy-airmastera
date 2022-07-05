const{Appointment, Car} = require('../models');
const {validationResult} = require('express-validator')
const {groupBy, reduce} = require('lodash');
const dayjs = require('dayjs');
 const ruLocale = require('dayjs/locale/ru');

function AppointmentController() {
}

const create = async function(req, res) {
    const errors = validationResult(req);
    const data = {
        car: req.body.car,
    elNumber: req.body.elNumber,
    diagnosis: req.body.diagnosis,
    price: req.body.price,
    date: req.body.date,
    time: req.body.time
    };

    if(!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: errors.array() 
        });
     }

try{
 await Car.findOne({_id: data.car});
}
catch(e){
        return res.status(404).json({
            success: false,
            message: 'CLIENT_NOT_FOUND'
        });
    }
     
     Appointment.create(data, function(err, doc)
    {
        
        if (err) {
            return res.status(500).json({
                success: false,
                message: err
            });
        }  
  
        res.status(201).json({
            success: true,
            data:data
        })
    });
};
const update = async function(req, res) {
    const appointmentId = req.params.id;
    const errors = validationResult(req);
    const data = {
    elNumber: req.body.elNumber,
    diagnosis: req.body.diagnosis,
    price: req.body.price,
    date: req.body.date,
    time: req.body.time
    };

    if(!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: errors.array() 
        });
     }


     
     Appointment.updateOne(
         {_id: appointmentId},
        {$set: data}, 
        function(err, doc){
        if (err) {
            return res.status(500).json({
                success: false,
                message: err
            });
        }  

        if(!doc)
        {
            return res.status(404).json({
                success: false,
                message: 'CLIENT_NOT_FOUND'
            }); 
        }
  
        res.status(201).json({
            success: true
        })
    });
};

const remove = async function (req, res) {
    const id = req.params.id;

    try{
        await Appointment.findOne({_id: id});
       }
       catch(e){
               return res.status(404).json({
                   success: false,
                   message: 'APPOINTMENT_NOT_FOUND'
               });
           }
    
    Appointment.deleteOne({_id: id}, (err) => {
if(err) {
return res.status(500).json({
    success: false,
    message: err
});
}
res.json({
    status: 'succes',
});
    });
};
var now = new Date();
var realDate = (now.getFullYear()+'.0'+(now.getMonth()+1)+'.0'+(now.getDate()-1))
console.log();
console.log(realDate)
const all = function(req, res) {
    Appointment.find({date: {$gt: realDate}}).sort("date").populate('car').sort("time").exec(function(err, docs) {
if(err)
{
return res.status(500).json({
    success: false,
    message: err
})
}

res.json({
    status: 'success',
    data:reduce(
        groupBy(docs, 'date'), 
        (result, value, key) => {
result = [... result, {title: dayjs(key).locale(ruLocale).format('D MMMM dddd'), data: value}];
        return result;
    },[]),
});
});
};



const show = async function (req, res) {
    const id = req.params.id;
    try {
        const car = await car.findById(id)
            .populate('appointments')
            .exec();

        res.json({
            status: "succes",
            data: { car, appointments: car.appointments }
        });
    }
    catch (e) {
        return res.status(404).json({
            success: false,
            message: 'CLIENT_NOT_FOUND'
        });
    }
}

AppointmentController.prototype = {
    all,
    create,
    remove,
    update,
    show
    

};

module.exports = AppointmentController;