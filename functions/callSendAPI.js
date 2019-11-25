const request = require('request');
const config = require('../config');
const PAGE_ACCESS_TOKEN = config.PAGE_ACCESS_TOKEN;
console.log(PAGE_ACCESS_TOKEN);

module.exports = function (){
  this.callSendAPI = (messageData) =>{
      request({
        uri: 'https://graph.facebook.com/v5.0/me/messages',
        qs: { access_token: PAGE_ACCESS_TOKEN },
        method: 'POST',
        json: messageData
    
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var recipientId = body.recipient_id;
          var messageId = body.message_id;
    
          if (messageId) {
            console.log("Successfully sent message with id %s to recipient %s",
              messageId, recipientId);
          } else {
          console.log("Successfully called Send API for recipient %s",
            recipientId);
          }
        } else {
          console.error("Failed calling Send API", response.statusCode, response.statusMessage, body.error);
        }
      });
    }
  }