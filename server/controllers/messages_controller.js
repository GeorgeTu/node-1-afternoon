let messages = [];
let id = 0;

const createMsg = (req, res) => {
    //object destructuring
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send(messages);
}

const readMsg = (req, res) => {
    res.status(200).send(messages)
}

const updateMsg = (req, res) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateID);
    let message = messages[messageIndex];

    messages[messageIndex] = {
        id: message.id,
        text: text || message.text,
        time: message.time
    }
    res.status(200).send(messages);
}

const deleteMsg = (req, res) => {
    const deleteID = req.params.id;
    messageIndex = messages.findIndex(message => message.id == deleteID)
    messages.splice(messageIndex, 1)
    res.status(200).send(messages);
}



module.exports = {
    createMsg,
    readMsg,
    updateMsg,
    deleteMsg
};