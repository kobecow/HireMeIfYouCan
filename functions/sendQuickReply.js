require('./callSendAPI')();

module.exports = function (){
    this.sendQuickReply = (recipientId, recivedMessage) =>{
    let messageData = {
        recipient: {
            id: recipientId
        },
        message: {}
    };
    console.log(recivedMessage)
    
    switch(recivedMessage) {
        case 'i\'m interested in you.':
            messageData.message.text = "Hi I\'m Seiji, Full Stack Engineer.\nWhat do you want to know about me?";
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
        case 'experiences':
            messageData.message.text = "In Automobile industry, Built and Managed systems on AWS for more than 2 years\n"+
            "My role was developing monitoring tool, bash script, solving incidents/problems and developing web applicaiton with Node.js\n"+
            "So I have proficient skills of Node.js and System Building by AWS.\n"+
            "Please look at my LinkedIn Profile https://www.linkedin.com/in/seiji-nishi/"
            break;

        default:
            console.log("AAA");
            return
        }
    
  
    callSendAPI(messageData);
  };
}