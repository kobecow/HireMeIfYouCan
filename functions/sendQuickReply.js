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
            messageData.message.text = "Okay, Let me tell you my experience.\nIn Automobile industry, I built and managed significant customer faced systems on AWS for more than 2 years.\n"+
            "My role was developing monitoring tool, bash script, solving incidents and problems and developing web applicaiton with Node.js\n"+
            "So I have proficient skills of Node.js and System Building by AWS.\n"+
            "If you require any further information, Please look at my LinkedIn Profile https://www.linkedin.com/in/seiji-nishi/ \n\n"+
            "What do you want to know about me?";

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

        case 'portfolios':
            messageData.message.text = "I'd like to tell you my Portfolio. This Chatbot is one of them. I used free domain and certification to use https. \n"+
            "And I built heatmap of several gases based on satellite data. This web app got an award of Space Apps 2019. This is run for only laptop not mobile now. https://gasmap.hiremeifyoucan.tk/ \n"+
            "Also, I'm building Learning English Application(named TanGo) with ReactNative. It is consisted of Chrome Extension and Web and Mobile Native for Android https://github.com/kobecow/TanGo \n"+
            "I'm learning a lot of things from my those side project. And I love it. Please Check my GitHub repository https://github.com/kobecow"+
            "\n\n"+
            "What do you want to know about me?";

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

        case 'general info':
                console.log('Got general info');
                messageData.message.text = "My Name is Seiji Nishi. Japanese Guy. 27years old.\n"+
                "Address is Waterloo, ON.\n"+
                "Email is sneeiwji@gmail.com"+
                "\n\n"+
                "What do you want to know about me?";

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

            case 'skills':   
                messageData.message.text = "Language: JavaScript, Python, Bash, SQL, Java\n"+
                "Development with Git, Ansible, Terraform\n"+
                "System Components: Node.js, Docker, MySQL, Oracle, Kubernetes, DynamoDB\n"+
                "Other: Linux, AWS"+
                "\n\n"+
                "What do you want to know about me?";;;
    
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

            case 'other':
                messageData.message.text = "Type it. I will learn it. and I will answer tomorrow."+
                "\n\n"+
                "What do you want to know about me?";;;
    
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
  };
}