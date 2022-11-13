//DATABASE
const db = require('diskdb');
db.connect('./data', ['bares'])

 if (!db.bares.find().length) {
    const bares = [{
        "Nombre": "Bar paco",
        "Descripción": "Uno de los mejores bares.",
        "Calles": "Calle de la golosina"
    }, {
        "Nombre": "Bar Juan",
        "Descripción": "Uno de los mejores bares de sevilla.",
        "Calles": "Calle de la trufa"
    }, {
        "Nombre": "Bar 33",
        "Descripción": "Uno de los mas antiguos.",
        "Calles": "Calle de cerveza"
    }, {
        "Nombre": "Bar La esquina",
        "Descripción": "Uno de los mejores bares de esquina.",
        "Calles": "Calle de la esquina"
    }, {
        "Nombre": "Bar taburete",
        "Descripción": "Uno de los mejores bares de taburete.",
        "Calles": "Calle taburete"
    }];

    db.bares.save(bares);
 }
 module.exports = db