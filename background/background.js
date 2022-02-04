
let blockComments = true;

function onMessageRecieve(message) {

    console.log("Got message");
    console.log(message);

    // Returns current state of comment blocking
    if(message.command === "get-comment-state"){
        return Promise.resolve({ block: blockComments });
    }
    // Changes current comment state
    else if(message.command === "update-comment-state")

    blockComments = message.block;

    chrome.tabs.query({active: true}, function(tabs){

        console.log(tabs);
        for (let index = 0; index < tabs.length; index++) {
            chrome.tabs.sendMessage(tabs[index].id, message);  
        }

       
    });

    return Promise.resolve({});

}



browser.runtime.onMessage.addListener(onMessageRecieve);

