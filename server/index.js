const express = require("express");
const bodyParser = require("body-parser");
const messages_controller = require(`${__dirname}/controllers/messages_controller`)
//full express application stored in app
const app = express();
//configure app to parse json from body via bodyparser
app.use(bodyParser.json());
//static server ?
app.use(express.static(__dirname+'/../public/build'));
const port = 3000;

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, messages_controller.createMsg);
app.get(messagesBaseUrl, messages_controller.readMsg);
app.put(`${messagesBaseUrl}/:id`, messages_controller.updateMsg);
app.delete(`${messagesBaseUrl}/:id`, messages_controller.deleteMsg);


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

// http://localhost:3000/api/messages/