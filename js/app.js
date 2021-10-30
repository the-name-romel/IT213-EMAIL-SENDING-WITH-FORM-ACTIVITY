// Variables
const sendBtn = document.getElementById('sendBtn');



//Even Listeners

eventListeners();

function eventListeners() {
    // app init
    document.addEventListener('DOMContentLoaded', appInit);
}


//Functions

//App initialization
function appInit() {
    // disable the send button on load
    sendBtn.disabled = true;
} 