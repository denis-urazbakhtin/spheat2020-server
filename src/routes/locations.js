var express = require('express');
var router = express.Router();
var out_address=[{
    gps: [12313123,234234234],
    address: "Ligovsky prospekt, 26",
    name: "Du Nord 1834dunord.",
    description: "French cuisine restaurant",
    image: "//////"

},
    {
        gps: [12234313,234234],
        address: "7ay liniay Vasilevskogo Ostrova, 24",
        name: "Na Parah",
        description: "Restaurant of healthy food",
        image: "//////"

    },
    {
        gps: [12234313,234234],
        address: "Nevsky prospekt, 18",
        name: "Literatutnoe kafe",
        description: "Russian cuisine restaurant",
        image: "//////"
    },
    {
        gps: [1223345313,23923423424],
        address: "Srednij prospekt Vasilevskogo Ostrova, 7",
        name: "Kafe and Vafly",
        description: "Cafeteria",
        image: "//////"
    },
    {
        gps: [122334313,23423423424],
        address: "7ay liniay Vasilevskogo Ostrova, 24",
        name: "Ukrop",
        description: "Vegetarian restaurant",
        image: "//////"
    },
    {
        gps: [12233456,2392343453424],
        address: "Bolshaya Morskaya ulica, 6",
        name: "Rock Star",
        description: "Craft beer bar",
        image: "//////"
    },
    {
        gps: [122332434456,2392343453424],
        address: "Naberezhnaya reki Mojki, 37",
        name: "Rasputin",
        description: "Russian cuisine restaurant",
        image: "//////"
    },
    {
        gps: [12565656566,2392343453424],
        address: "Nevsky prospekt, 11/2",
        name: "Shtolle",
        description: "Pie restaurant",
        image: "//////"
    },
    {
        gps: [125645456566,2392343453424],
        address: "Nevsky prospekt, 28",
        name: "Zinger",
        description: "Russian cuisine restaurant",
        image: "//////"
    },
    {
        gps: [125643434566,2392343453424],
        address: "Kazanskaya ulica, 10",
        name: "Baraka",
        description: "Vegetarian restaurant",
        image: "//////"
    },
    {
        gps: [59.9349492,30.3065704],
        address: "Voznesensky Prospekt, 6",
        name: "Cococo",
        description: "French cuisine restaurant",
        image: "//////"
    },
    {
        gps: [59.9415174,30.2774663],
        address: "Kadetskaya liniya Vasilevskogo Ostrova, 29",
        name: "Hachapuri i Vino",
        description: "Georgian restaurant",
        image: "//////"
    },
    {
        gps: [59.9471053,30.2822571],
        address: "Kadetskaya liniya Vasilevskogo Ostrova, 29",
        name: "LE MONITEUR Cafe",
        description: "Cafeteria",
        image: "//////"
    },
    {
        gps: [59.945291,30.2844183],
        address: "Kadetskaya liniya Vasilevskogo Ostrova, 25",
        name: "Gril#Factory",
        description: "Burger joint",
        image: "//////"
    },
    {
        gps: [59.9449976,30.2864986],
        address: "Tuchkov pereulok, 11/5",
        name: "Villaggio",
        description: "Italian restaurant",
        image: "//////"
    },
    {
        gps: [59.9449929,30.2536679],
        address: "Srednij prospekt Vasilevskogo Ostrova, 6",
        name: "Mama Roma",
        description: "Pizzeria",
        image: "//////"
    },
    {
        gps: [59.9449836,30.2536679],
        address: "4ay liniay Vasilevskogo Ostrova, 5",
        name: "Staryj Tbilisi",
        description: "Georgian restaurant",
        image: "//////"
    },
    {
        gps: [59.9143559,30.3532643],
        address: "Nevsky prospekt, 38/4",
        name: "#FARШ",
        description: "Burger joint",
        image: "//////"
    },
    {
        gps: [59.9143188,30.3532642],
        address: "Malaya Morskaya ulica, 7",
        name: "Bushe",
        description: "Cafeteria",
        image: "//////"
    },
    {
        gps: [59.9142817,30.3532641],
        address: "Srednij prospekt Vasilevskogo Ostrova, 28",
        name: "Kontakt Bar",
        description: "Bar",
        image: "//////"
    }
]
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(out_address);
});

module.exports = router;