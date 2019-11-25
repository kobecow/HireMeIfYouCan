const sendQuickReply = require('./sendQuickReply');
const sendToLearn = require('./sendToLearn');

module.exports.receivedMessage = (event) =>{
    const senderID = event.sender.id;
    const recipientID = event.recipient.id;
    const timeOfMessage = event.timestamp;
    const message = event.message;

    console.log("Received message for user %d and page %d at %d with message:",
    senderID, recipientID, timeOfMessage);
    console.log(JSON.stringify(message));

    const isEcho = message.is_echo;
    const messageId = message.mid;
    const appId = message.app_id;
    const metadata = message.metadata;

    // You may get a text or attachment but not both
    let messageText = message.text;
    const messageAttachments = message.attachments;
    const quickReply = message.quick_reply;


    if (isEcho) {
        // Just logging message echoes to console
        console.log("Received echo for message %s and app %d with metadata %s",
          messageId, appId, metadata);
        return;
      } else if (quickReply) {
        var quickReplyPayload = quickReply.payload.toLowerCase();
        console.log("Quick reply for message %s with payload %s",
          messageId, quickReplyPayload);
        sendQuickReply(senderID, quickReplyPayload)
        // TODO
        // insert message event into DB
        return;
      }



      if (messageText) {

        messageText = messageText.replace(/[^\w\s]/gi, '')
        sendToLearn(senderID, messageText)

      }

      
}