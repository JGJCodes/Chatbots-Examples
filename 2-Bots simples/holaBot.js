var builder = require('botbuilder'); //inicializacion de botbuilder

var connector = new builder.ConsoleConnector().listen(); //Crear el conector a la terminal
var bot = new builder.UniversalBot(connector); //creando el bot

//Dialogo raiz o inicial
bot.dialog('/', [
    function(session) {
        session.send('Hola Mundo!');
    }
]);