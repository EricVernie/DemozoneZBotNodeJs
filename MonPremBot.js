var builder = require("botbuilder");

//Step 1
// var connector = new builder.ConsoleConnector().listen();
// var bot = new builder.UniversalBot(connector);

// bot.dialog('/',function(session) {    
//     session.send("Vous avez dit : " + session.message.text);
// });

var restify = require('restify');
//Step 2
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s écoute sur le port %s', server.name, server.url); 
});
  
// // Create chat bot
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
var connector = new builder.ChatConnector();
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

// //=========================================================
// // Bots Dialogs
// //=========================================================

bot.dialog('/',function (session) {
    session.send("vous avez dit : " + session.message.text);    
});


