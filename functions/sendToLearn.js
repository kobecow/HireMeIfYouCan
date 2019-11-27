
module.exports = function (){
    this.sendToLearn = (recipientId, recivedMessage) =>{
    let messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            text: `Sorry I can't answer it right now. But I will answer against " ${recivedMessage} ".
It means This bot can learn new things from you every day`,
        quick_replies: [{
                    "content_type":"text",
                    "title":"Experiences",
                    "payload":"Experiences"
                },
                {
                    "content_type":"text",
                    "title":"Portfolios",
                    "payload":"Portfolios"
                },
                {
                    "content_type":"text",
                    "title":"General Info",
                    "payload":"General Info"
                },
                {
                    "content_type":"text",
                    "title":"Skills",
                    "payload":"Skills"
                },
                {
                    "content_type":"text",
                    "title":"Other",
                    "payload":"Other"
                }
            ]
        }
    };
    // TODO
    // generate message
    
  
    callSendAPI(messageData);
  };
}