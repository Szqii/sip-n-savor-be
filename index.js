const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());

const coffeeList = [
    {
        id: 1, name: 'Espresso',
        description: 'Made by forcing steam through ground coffee beans.',
        prices: {small: 70, medium: 85, large: 95}
    },
    {
        id: 2, name: 'Americano',
        description: 'Made by diluting espresso with hot water.',
        prices: {small: 80, medium: 95, large: 105}
    },
    {
        id: 3, name: 'Cappuccino',
        description: 'Made with espresso, hot milk, and steamed-milk foam.',
        prices: {small: 90, medium: 105, large: 115}
    },
    {
        id: 4, name: 'Latte',
        description: 'Made with espresso and steamed milk.',
        prices: {small: 100, medium: 115, large: 125}
    },
    {
        id: 5, name: 'Mocha',
        description: 'Made with espresso, chocolate syrup, and steamed milk.',
        prices: {small: 110, medium: 125, large: 135}
    },
    {
        id: 6, name: 'Macchiato',
        description: 'Made with espresso and a small amount of steamed milk.',
        prices: {small: 120, medium: 135, large: 145}
    },
    {
        id: 7, name: 'Flat White',
        description: 'Made with espresso and lightly steamed milk.',
        prices: {small: 130, medium: 145, large: 155}
    },
    {
        id: 8, name: 'Long Black',
        description: 'Made with espresso and hot water.',
        prices: {small: 140, medium: 155, large: 165}
    },
    {
        id: 9, name: 'Affogato',
        description: 'Made with espresso and a scoop of ice cream.',
        prices: {small: 150, medium: 165, large: 175}
    },
    {
        id: 10, name: 'Irish',
        description: 'Made with espresso, whiskey, sugar, and cream.',
        prices: {small: 160, medium: 175, large: 185}
    },
]

app.get('/api/get-menu', (req, res) => {
    res.json({
        coffeeList,
    }).status(200);
});

app.get('/api/get-coffee/:id', (req, res) => {
    const {id} = req.params;
    const coffee = coffeeList.find(coffee => coffee.id === Number(id));
    res.json({
        coffee,
    }).status(200);
})

app.listen(3000, () => {
    console.log('Listening :3000');
});
