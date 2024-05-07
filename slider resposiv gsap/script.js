function sendMessage(message) {
    console.log(message);
};

function createMessage (sendMessage) {
    const msg = 'This is collback fun with message'
    sendMessage(msg)
};


createMessage(sendMessage)


