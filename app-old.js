

const http = require('http');

http.createServer( (req, res) => {

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type' : 'application/csv' });

    

    // const persona = {
    //     id: 1,
    //     nombre : 'Miguel'
    // }

    // res.write(JSON.stringify(persona));

    // res.write( 'id, nombre');
    // res.write( '1, Miguel');
    // res.write( '2, Felipe');
    // res.write( '3, Milena');

    res.write("Hola Mundo");

    res.end();

})
.listen(8080);

console.log("Escuchando el puero" , 8080);