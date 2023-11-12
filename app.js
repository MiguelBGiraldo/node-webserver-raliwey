const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT;

//Parciales
const hbs = require('hbs');

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estatico

//Se le dice a express se le dice que tome la carpeta public
app.use( express.static('public'));

// app.get('/', (req, res) => {
//     res.send('Home Page');
// })

app.get('/', (req, res) => {
    // el objeto son las opciones o argumentos
    res.render('home', {
        nombre: 'Miguel Bernal',
        titulo: 'Curso node'
    });
})

app.get('/generic', (req, res) => {
    // el objeto son las opciones o argumentos
    res.render('generic', {
        nombre: 'Miguel Bernal',
        titulo: 'Curso node'
    });
})

app.get('/elements', (req, res) => {
    // el objeto son las opciones o argumentos
    res.render('elements', {
        nombre: 'Miguel Bernal',
        titulo: 'Curso node'
    });
})



app.get('*', (req, res) => {
    res.sendFile(  + '/public/404.html');
    // res.send('404 page no found');
})

app.listen(port, () => {
    console.log(`se esta corriendo en el puerto:${port}`)
})


//Las carpetas tienen prioridad sobre las rutas



// app.get('/generic', (req, res) => {
//     res.sendFile( __dirname + '/public/generic.html');
// })

// app.get('/elements', (req, res) => {
//     res.sendFile( __dirname + '/public/elements.html');
// })

