const {connect} = require('mongoose');
require('dotenv').config()
const dbConnect = async () => {
    connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => console.log('Error connecting to MongoDB', err));
}

module.exports = dbConnect;
