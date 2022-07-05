const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://turro:300599Turro@cluster0.z7kwn.mongodb.net/airmasters?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.catch(function(err) {
    throw Error(err);
});


module.exports = mongoose;