const Coffee = require("../models/coffeeModel");

exports.getSingleCoffee = (id) => {
    return Coffee.find({
        id: id
    }).exec().then((data) => {
        return data;
    }).catch((err) => {
        console.log(err);
        return null;
    })
}

exports.getAllCoffees = () => {
    return Coffee.find({}).exec().then((data) => {
        return data;
    }).catch((err) => {
        console.log(err);
        return null;
    })
}

