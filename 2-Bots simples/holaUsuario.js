var builder = require('botbuilder');//inicializacion de botbuilder

var connector = new builder.ConsoleConnector().listen();//Crear el conector a la terminal
var bot = new builder.UniversalBot(connector);//creando el bot

//Dialogo raiz o inicial
bot.dialog('/', [
    function (session) {
        builder.Prompts.text(session, '¿Cómo te llamas?');
    },
    function (session, results) {
        let msj = results.response;//almacenamiento del mensaje de usuario
        session.send(`Hola ${msj}!`);//impresion del mensaje
    }
]);