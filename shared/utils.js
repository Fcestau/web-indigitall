function login (emailValue) {
    return new Promise((resolve, reject) => {
        indigitall.logIn(emailValue, (device)=>{
            resolve(device);
        }, (error)=>{
            reject(error);
        })
    });
} 

function logout () {
    return new Promise((resolve, reject) => {
        indigitall.logout((device)=>{
            resolve(device);
        }, (error)=>{
            reject(error);
        })
    });
} 


function unsuscribeTopic (topicCode) {
    return new Promise((resolve, reject) => {
        indigitall.topicsUnsubscribe(topicCode, (topics) => {
            console.log('unsuscribed to topic: ' + topicCode);
            resolve(topics); 
        }, () => {
            console.log(error)
            reject(error);
        });
    });
    
} 

function sendCustomEvent (eventType, data) { 
    return new Promise((resolve, reject) => {
        indigitall.sendCustomEvent({
            eventType: eventType,
            customData: data,
            async: false,
          }, (response) => {
            console.log('event sent: ' + eventType + ' with data: ' + data);
            resolve(response);  
          },(error)=>{
            reject(error);
          });
    });
}
