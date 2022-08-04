const Express = require('express');

const Aplicativo = new Express();

const Model = [

    {
        id: 1,
        nome: "Danilo"

    },
    {
        id: 2,
        nome: "Marisa"

    },
    {
        id: 3,
        nome: "Alessandra"

    }

]
//controlador API
function Controlador(cliente, servidor) {
    servidor.json(Model);
}


//controlador
function Controlador(cliente, servidor) {
    servidor.send('Controller principal');
        
}
//controlador View
function ControladorView(cliente, servidor) {
    servidor.sendFile(__dirname + '/Home.html');
}

// Rotas
Aplicativo.get('/api', Controlador);

Aplicativo.get('/view', ControladorView);

Aplicativo.listen(5678, () => console.log("servidor rosando!"));


