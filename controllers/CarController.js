const{Car, Client} = require('../models');
const {validationResult} = require('express-validator')
const {groupBy, reduce} = require('lodash');
const dayjs = require('dayjs');
 const ruLocale = require('dayjs/locale/ru');

function CarController() {
}

const create = async function(req, res) {
    const errors = validationResult(req);
    const data = {
        client: req.body.client,
    avatar: req.body.avatar,
    carname: req.body.carname,
    carmodel: req.body.carmodel,
    carnumber: req.body.carnumber
    };

    switch (data.carname) {
        case "Alfa Romeo":
            {
                data.avatar = 'https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/Alfa_Romeo.svg/1200px-Alfa_Romeo.svg.png'
            }
            break;
            case "Audi":
                {
                    data.avatar = 'https://www.thelogocreative.co.uk/wp-content/uploads/Audi-Logo-e1613930037917.png'
                }
                break;
                case "Chevrolet":
                    {
                        data.avatar = 'https://2.bp.blogspot.com/-Pa6eOE-Dp_I/W_Y61Zy6MuI/AAAAAAAAQNU/E_PRrYtsB4Ia07ECvzf1hii0N6dXofbeQCLcBGAs/s1600/Chevrolet.png'
                    }
                    break;
                case "Chrysler":
                    {
                        data.avatar = 'https://www.rental-car-melbourne.com.au/wp-content/uploads/2016/01/chrysler.png'
                    }
                    break;
                    case "Citroen":
                        {
                            data.avatar = 'https://www.autopsa.ru/image/catalog/i/ik/mh/478a3dc3d78f3020214a616dfc4a84d8.png'
                        }
                        break;
                        case "Dodge":
                            {
                                data.avatar = 'https://pngimg.com/uploads/dodge/dodge_PNG52.png'
                            }
                            break;
                            case "Fiat":
                                {
                                    data.avatar = 'https://www.pnglib.com/wp-content/uploads/2021/02/fiat-icon_60202bac11cce-2048x2048.png'
                                }
                                break;
                                case "Hyundai":
                                    {
                                        data.avatar = 'https://www.avtorassvet.ru/wp-content/uploads/2021/01/car_logo_PNG1645.png'
                                    }
                                    break;
                                case "Infiniti":
                                    {
                                        data.avatar = 'https://logos-voiture.com/wp-content/uploads/2020/01/Infiniti-Logo.png'
                                    }
                                    break;
                                    case "Iveco":
                                        {
                                            data.avatar = 'https://автолого.рф/wp-content/uploads/pegaso-logo-black-1920x1080.png'
                                        }
                                        break;
                                        case "Jeep":
                                            {
                                                data.avatar = 'https://автолого.рф/wp-content/uploads/jeep-logo-green-3840x2160.png'
                                            }
                                            break;
                                            case "Land Rover":
                                                {
                                                    data.avatar = 'https://clevelandcreative.agency/wp-content/uploads/2019/05/Land-Rover.png'
                                                }
                                                break
                                                case "Peugeot":
                                                    {
                                                        data.avatar = 'https://sc01.alicdn.com/kf/H74014265af584a05a4e8057c0afc87d1A/manufacture-made-auto-logos-and-Emblems-vacuum.png'
                                                    }
                                                    break;
                                                    case "Rover":
                                                        {
                                                            data.avatar = 'https://dvd-auto.ru/800/600/https/i.pinimg.com/originals/70/7d/a7/707da7ca5390a17712bf81ca9feab7e8.png'
                                                        }
                                                        break;
                                                        case "SEAT":
                                                            {
                                                                data.avatar = 'https://olympek.ru/system/product_category_logos/5221/лого_сеат_original.png?1491393103'
                                                            }
                                                            break;
                                                            case "Subaru":
                                                                {
                                                                    data.avatar = 'https://static.tildacdn.com/tild3830-3166-4461-b061-613633613161/subaru.png'
                                                                }
                                                                break;
                                                                case "Suzuki":
                                                                    {
                                                                        data.avatar = 'https://images.ua.prom.st/2081092595_w640_h640_amortizatory-suzuki.jpg'
                                                                    }
                                                                    break;
                                                                    case "Volvo":
                                                                    {
                                                                        data.avatar = 'https://pluspng.com/img-png/volvo-logo-png-volvo-logo-hd-png-meaning-information-2048x2048.png'
                                                                    }
                                                                    break;
        case 'Renault':
            {
                data.avatar = 'https://main-cdn.sbermegamarket.ru/hlr-system/1483987621/600000195405b0.png'
            }
            break;
        case 'BMW':
            {
                data.avatar = 'https://www.bio-circle.dk/media/image/27/bb/66/BMW_1280x1280@2x.png'
            }
            break;
        case 'Mercedes-Benz':
            {
                data.avatar = 'https://www.pinclipart.com/picdir/big/35-355680_mercedes-benz-logo-png-mercedes-benz-logo-mercedes.png'
            }
            break;
        case 'Toyota':
            {
                data.avatar = '../assets/cars/toyota.png'
            }
            break;
        case 'Volkswagen':
            {
                data.avatar = 'https://www.dealerware.com/uploads/2020/02/vw-logo-1536x1536.png'
            }
            break;
        case 'Opel':
            {
                data.avatar = 'https://avatars.mds.yandex.net/get-zen_doc/1640581/pub_5f2943ec65ea473173dc5330_5f29492b8aa3d265eb5f88a6/scale_1200'
            }
            break;
        case 'Mitsubisi':
            {
                data.avatar = 'https://www.pnglib.com/wp-content/uploads/2020/01/mitsubishi-logo_5e1cc65385b27.png'
            }
            break;
        case 'Lexus':
            {
                data.avatar = 'https://www.wallpapertip.com/wmimgs/40-401998_lexus-logo-wallpaper-lexus-car-logo-png.png'
            }
            break;
        case 'Skoda':
            {
                data.avatar = 'https://static.tildacdn.com/tild3833-3631-4462-b165-383461326336/shkoda.png'
            }
            break;
        case 'Nissan':
            {
                data.avatar = 'https://pluspng.com/img-png/nissan-logo-png-2048x2048-hd-png-2048.png'
            }
            break;
        case 'KIA':
            {
                data.avatar = 'https://nasemashko.by/wp-content/uploads/2018/08/kia-logo.png'
            }
            break;
        case 'Ford':
            {
                data.avatar = 'https://logomobil.ru/wp-content/uploads/2021/03/img_6042671f002c1.png'
            }
            break;
        case 'Honda':
            {
                data.avatar = 'https://www.clipartmax.com/png/full/227-2275258_honda-logo-png.png'
            }
            break;
            case 'Mazda':
            {
                data.avatar = 'https://i0.wp.com/stinger-service.ru/wp-content/uploads/2020/02/car_logo_mazda.png'
            }
            break;
    }

    if(!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: errors.array() 
        });
     }

try{
 await Client.findOne({_id: data.client});
}
catch(e){
        return res.status(404).json({
            success: false,
            message: 'CLIENT_NOT_FOUND'
        });
    }
     
     Car.create(data, function(err, doc)
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
    const carId = req.params.id;
    const errors = validationResult(req);
    const data = {
    carname: req.body.carname,
    carmodel: req.body.carmodel,
    carnumber: req.body.carnumber
    };

    if(!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: errors.array() 
        });
     }


     
     Car.updateOne(
         {_id: carId},
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
        await Car.findOne({_id: id});
       }
       catch(e){
               return res.status(404).json({
                   success: false,
                   message: 'Car_NOT_FOUND'
               });
           }
    
    Car.deleteOne({_id: id}, (err) => {
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
var realDate = (now.getFullYear()+ (now.getMonth()+1)+(now.getDate()-1))
console.log();
console.log(realDate)
const all = function(req, res) {
    Car.find().populate('client').exec(function(err, docs) {
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
result = [... result, value];
        return result;
    }),
});
});
};



const show = async function (req, res) {
    const id = req.params.id;
    try {
        const car = await Car.findById(id)
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

CarController.prototype = {
    all,
    create,
    remove,
    update,
    show
    

};

module.exports = CarController;