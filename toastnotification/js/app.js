// Ui

const button=document.getElementById('button');
const toasts=document.getElementById('toasts');

const messages=[
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
    "Message Five"
];


button.addEventListener('click',()=>createnotification("can't access","danger"));

// create notification
function createnotification(message,type){
    // console.log('hay');

    const notify=document.createElement('div');
    notify.className="toast";
    notify.classList.add(type? type : "info");
    notify.innerText=message? message : getrandommessage;
    console.log(notify);

    toasts.appendChild(notify);

    setTimeout(()=>{
        notify.remove();
    },3000)
}

function getrandommessage(){
    return messages[Math.floor(Math.random() * messages.length)];
};
// console.log(getrandommessage);