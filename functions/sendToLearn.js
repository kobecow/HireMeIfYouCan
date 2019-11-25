
module.exports = function (){
    this.sendToLearn = (recipientId, recivedMessage) =>{
    let messageData = {
        recipient: {
            id: recipientId
        },
        message: {}
    };
    // TODO
    // generate message
    
  
    callSendAPI(messageData);
  };
}