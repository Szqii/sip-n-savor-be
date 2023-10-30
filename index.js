const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());

const coffeeList = [
    {
        id: 1, name: 'Espresso',
        description: 'Made by forcing steam through ground coffee beans.',
        longDescription: 'Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely-ground coffee beans. Espresso coffee can be made with a wide variety of coffee beans and roast degrees. Espresso is the most common way of making coffee in southern Europe, especially in Italy, Spain, Portugal and France. Espresso is also popular in the United States, South America, and Japan.',
        prices: {small: 70, medium: 85, large: 95},
        imageUrl: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&q=80&w=3415&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['#strong', '#hot']
    },
    {
        id: 2, name: 'Americano',
        description: 'Made by diluting espresso with hot water.',
        longDescription: 'Caffè Americano (also known as Americano or American) is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee. The strength of an Americano varies with the number of shots of espresso and the amount of water added.',
        prices: {small: 80, medium: 95, large: 105},
        imageUrl: 'https://cdn.shopify.com/s/files/1/1995/9093/files/beyaz-fincanda-americano.jpg?v=1678195080',
        tags: ['#weak', '#hot']
    },
    {
        id: 3, name: 'Cappuccino',
        description: 'Made with espresso, hot milk, and steamed-milk foam.',
        longDescription: 'A cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, using non-dairy milks, and flavoring with cinnamon or chocolate powder.',
        prices: {small: 90, medium: 105, large: 115},
        imageUrl: 'https://images.unsplash.com/photo-1509566571888-9075f0776547?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['#hot', '#milky']
    },
    {
        id: 4, name: 'Latte',
        description: 'Made with espresso and steamed milk.',
        longDescription: 'A latte is a coffee drink made with espresso and steamed milk. The term as used in English is a shortened form of the Italian caffè latte, which means "milk coffee".',
        prices: {small: 100, medium: 115, large: 125},
        imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=3437&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['#hot', '#milky', '#sweet']
    },
    {
        id: 5, name: 'Mocha',
        description: 'Made with espresso, chocolate syrup, and steamed milk.',
        longDescription: 'A caffè mocha, also called mocaccino, is a chocolate-flavored variant of a caffè latte. The name is derived from the city of Mocha, Yemen, which was one of the centers of early coffee trade. Like a caffè latte, caffè mocha is based on espresso and hot milk but with added chocolate, typically in the form of sweet cocoa powder, although many varieties use chocolate syrup. Mochas can contain dark or milk chocolate.',
        prices: {small: 110, medium: 125, large: 135},
        imageUrl: 'https://images.unsplash.com/photo-1513244608388-32427255be63?auto=format&fit=crop&q=80&w=2592&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['#hot', '#milky', '#sweet']
    },
    {
        id: 6, name: 'Macchiato',
        description: 'Made with espresso and a small amount of steamed milk.',
        longDescription: 'Caffè macchiato, sometimes called espresso macchiato, is an espresso coffee drink with a small amount of milk, usually foamed. In Italian, macchiato means "stained" or "spotted" so the literal translation of caffè macchiato is "stained coffee", or coffee with a spot of milk.',
        prices: {small: 120, medium: 135, large: 145},
        imageUrl: 'https://images.unsplash.com/photo-1503481766315-7a586b20f66d?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['#hot', '#milky']
    },
    {
        id: 7, name: 'Flat White',
        description: 'Made with espresso and lightly steamed milk.',
        longDescription: 'A flat white is an espresso-based coffee drink. It is prepared by pouring microfoam (steamed milk with small, fine bubbles with a glossy or velvety consistency) over a single or double shot of espresso. It is somewhat similar to the caffè latte although smaller in volume and less microfoam, therefore having a higher proportion of coffee to milk, and milk that is more velvety in consistency – allowing the espresso to dominate the flavour, while being supported by the milk.',
        prices: {small: 130, medium: 145, large: 155},
        imageUrl: 'https://icecektarifleri.net/wp-content/uploads/2023/07/flat-white-kahve-tarifi-nasil-yapilir.jpg',
        tags: ['#hot', '#milky']
    },
    {
        id: 8, name: 'Long Black',
        description: 'Made with espresso and hot water.',
        longDescription: 'A long black is a style of coffee, commonly found in Australia and New Zealand. It is similar to an Americano, but with a stronger aroma and taste. A long black is made by pouring a double-shot of espresso or ristretto over hot water. Usually the water is also heated by the espresso machine. A long black is typically served with the crema intact.',
        prices: {small: 140, medium: 155, large: 165},
        imageUrl: 'https://www.craftcoffeeguru.com/wp-content/uploads/2019/02/americano-9.jpg',
        tags: ['#strong', '#hot']
    },
    {
        id: 9, name: 'Affogato',
        description: 'Made with espresso and a scoop of ice cream.',
        longDescription: 'Affogato is an Italian coffee-based dessert. It usually takes the form of a scoop of vanilla gelato or ice cream topped or "drowned" with a shot of hot espresso. Some variations also include a shot of amaretto, Bicerin, Kahlúa, or other liqueur. It is considered one drink, not a combination of coffee and ice cream. The word "affogato" means "drowned" in Italian, and "affogato style", refers to the act of topping a drink or dessert with espresso, may also incorporate caramel sauce or chocolate sauce.',
        prices: {small: 150, medium: 165, large: 175},
        imageUrl: 'https://static01.nyt.com/images/2021/08/15/magazine/affogato/affogato-threeByTwoMediumAt2X-v2.jpg',
        tags: ['#hot', '#sweet']
    },
    {
        id: 10, name: 'Irish',
        description: 'Made with espresso, whiskey, sugar, and cream.',
        longDescription: 'Irish coffee is a cocktail consisting of hot coffee, Irish whiskey, and sugar. Stirred, and topped with thick cream, the Irish coffee is drunk through the cream. The original recipe explicitly uses cream that has not been whipped, although drinks made with whipped cream are often sold as "Irish coffee".',
        prices: {small: 160, medium: 175, large: 185},
        imageUrl: 'https://veviski.com/wp-content/uploads/2021/08/Irish-Coffee-1.jpeg',
        tags: ['#hot', '#strong', "#alcoholic"]
    },
]

app.get('/api/get-menu', (req, res) => {
    res.json({
        data: coffeeList,
    }).status(200);
});

app.get('/api/get-coffee/:id', (req, res) => {
    const {id} = req.params;
    const coffee = coffeeList.find(coffee => coffee.id === Number(id));
    res.json({
        data: coffee,
    }).status(200);
})

app.listen(3000, () => {
    console.log('Listening :3000');
});
