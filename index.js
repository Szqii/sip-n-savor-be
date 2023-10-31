const express = require('express');
const cors = require('cors')
const dbConnect = require('./db/dbConnect');
const {getAllCoffees, getSingleCoffee} = require("./db/controllers/coffee");

dbConnect();
const app = express();

app.use(cors());

app.get('/api/get-menu', (req, res) => {
    getAllCoffees().then((data) => {
        res.json({
            data,
        }).status(200);
    })
});

app.get('/api/get-coffee/:id', async (req, res) => {
    const {id} = req.params;
    getSingleCoffee(id).then((data) => {
        res.json({
            data: data[0],
        }).status(200);
    })

})

app.listen(3000, () => {
    console.log('Listening :3000');
});
