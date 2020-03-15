const MongoClient = require('mongodb').MongoClient
var db

// MongoClient.connect('mongodb://localhost:27017/RootDB', (err, client) => {
//     if (err){
//         console.log('NOTConnected')
//         return console.log(err)
//     }
//     db = client.db('locations') // whatever your database name is
//     console.log('Connected')
//
// })
var out_address=[{
    gps: [59.9347212, 30.3506727],
    address: "Ligovsky prospekt, 26",
    name: "Du Nord 1834",
    description: "French cuisine restaurant",
    image: "//////"

},
    {
        gps: [59.9398017, 30.2799209],
        address: "7ay liniay Vasilevskogo Ostrova, 24",
        name: "Na Parah",
        description: "Restaurant of healthy food",
        image: "//////"

    },
    {
        gps: [59.9364674, 30.3164066],
        address: "Nevsky prospekt, 18",
        name: "Literatutnoe kafe",
        description: "Russian cuisine restaurant",
        image: "//////"
    },
    {
        gps: [59.9454383, 30.2834852],
        address: "Srednij prospekt Vasilevskogo Ostrova, 7",
        name: "Kafe and Vafly",
        description: "Cafeteria",
        image: "//////"
    },
    {
        gps: [59.9405692, 30.2789226],
        address: "7ay liniay Vasilevskogo Ostrova, 24",
        name: "Ukrop",
        description: "Vegetarian restaurant",
        image: "//////"
    },
    {
        gps: [59.9371919, 30.3156306],
        address: "Bolshaya Morskaya ulica, 6",
        name: "Rock Star",
        description: "Craft beer bar",
        image: "//////"
    },
    {
        gps: [9.9403511, 30.3165473],
        address: "Naberezhnaya reki Mojki, 37",
        name: "Rasputin",
        description: "Russian cuisine restaurant",
        image: "//////"
    },
    {
        gps: [59.9363916, 30.3139224],
        address: "Nevsky prospekt, 11/2",
        name: "Shtolle",
        description: "Pie restaurant",
        image: "//////"
    },
    {
        gps: [59.9356795, 30.3235355],
        address: "Nevsky prospekt, 28",
        name: "Zinger",
        description: "Russian cuisine restaurant",
        image: "//////"
    },
    {
        gps: [59.932398, 30.3197498],
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


MongoClient.connect('mongodb://localhost:27017/RootDB', function(err, db) {
    if (err) throw err;
    let dbo = db.db("RootDB");
    // dbo.createCollection("locations", function(err, res) {
    //     if (err) throw err;
    //     console.log("Collection created!")
    //     // dbo.collections('locations').insertOne(out_address[0])
    //     // dbo.collection('locations').find().toArray(function(err, results) {console.log(results)})
    //     db.close();
    // });
    dbo.collection("locations").remove({}, function(err, res) {
        if (err) throw err;
        console.log("1 document deleted");

    });
    dbo.collection("locations").insertMany(out_address, function(err, result) {
        if (err) throw err;
        console.log(result);

    });
    // dbo.collection("locations").insertOne(out_address[0], function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     db.close();
    // });
    dbo.collection("customers").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});


// db.createCollection("customers", function(err, res)

// db.collection('locations').find().toArray(function(err, results) {
//     console.log(results)})

