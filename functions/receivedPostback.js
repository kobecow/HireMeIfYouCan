const sendQuickReply = './sendQuickReply';


export function receivedPostback(event) {
    const senderID = event.sender.id;
    const recipientID = event.recipient.id;
    const timeOfPostback = event.timestamp;
  
    // The 'payload' param is a developer-defined field which is set in a postback
    // button for Structured Messages.
    const payload = event.postback.payload.toLowerCase();
  
    console.log("Received postback for user %d and page %d with payload '%s' " +
      "at %d", senderID, recipientID, payload, timeOfPostback);
      
    sendQuickReply(senderID, payload)
  }