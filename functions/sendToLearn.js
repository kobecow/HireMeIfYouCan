
module.exports = function (){
    this.sendToLearn = (recipientId, recivedMessage) =>{
    let messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            text: `Sorry I can't answer it right now. But I will answer against " ${recivedMessage} ".
            It means This bot can learn new things from you every day.`
        }
    };
    // TODO
    // generate message
    
  
    callSendAPI(messageData);
  };
}