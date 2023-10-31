const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    longDescription: String,
    prices: {
        small: Number,
        medium: Number,
        large: Number,
    },
    imageUrl: String,
    tags: [String],
});

const Coffee = mongoose.model('coffees', coffeeSchema);

module.exports = Coffee;
