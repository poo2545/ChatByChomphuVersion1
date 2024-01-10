const mongoose = require('mongoose');

const url = `mongodb+srv://diabet:1111@cluster0.ykyrfhv.mongodb.net/`;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))