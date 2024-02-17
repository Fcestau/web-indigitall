
function getTopicsCodes() {
    return new Promise((resolve, reject) => {
        indigitall.topicsList(
            (topicsList) => { 
                let topicsCodes = topicsList.map((topic) => topic.code);
                resolve(topicsCodes); 
            }, 
            (error) => { reject(error); });
    });
}

function subscribeToAllTopics() {
    return getTopicsCodes()
        .then((topicsCodes) => {
            return new Promise((resolve, reject) => {
                indigitall.topicsSubscribe(
                    topicsCodes,
                    () => {
                        console.log('Subscribed to all topics');
                        resolve();
                    },
                    (error) => {
                        console.error(error);
                        reject(error);
                    }
                );
            });
        });
}

subscribeToAllTopics().catch((error) => {
    console.error('Subscription failed:', error);
});