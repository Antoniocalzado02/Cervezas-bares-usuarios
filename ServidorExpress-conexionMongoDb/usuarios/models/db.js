//DATABASE
const db = require('diskdb');
db.connect('./data', ['users'])

if (!db.users.find().length) {
    const users = [{
        "Nombre": "Antonio",
        "Apellido": "Calzado",
        "Nick": "antonio2323",
        "Email": "antonio23@gmail.com",
        "Contraseña": "calzado"
    },{
        "Nombre": "Juanma",
        "Apellido": "Calzado",
        "Nick": "juanmi43",
        "Email": "juanma43@gmail.com",
        "Contraseña": "calzado"
    }];
    db.users.save(users);
 }

 module.exports = db