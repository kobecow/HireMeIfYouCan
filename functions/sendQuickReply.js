const callSendAPI = './callSendAPI';

module.exports.sendQuickReply = (recipientId, recivedMessage) =>{
    let messageData = {
        recipient: {
            id: recipientId
        },
        message: {}
    };
    
    switch(recivedMessage) {
        case 'i\'m interested in you.':
            messageData.message.text = "Hi I\'m Seiji, Full Stack Engineer.\n What do you want to know about me?";
            messageData.message.quick_replies = [
                {
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
            ];
            break;

        default:
            console.log("AAA");
            return

    }
    
  
    callSendAPI(messageData);
  }