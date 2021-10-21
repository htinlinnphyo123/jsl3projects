//UI
const picdiv=document.querySelector('.fill');
const empties=document.querySelectorAll('.empty');

picdiv.addEventListener('dragstart',dragstart);
picdiv.addEventListener('dragend',dragend);

function dragstart(){
    console.log('dragstart is working');

    // this.className = "fill hold";

    this.className += " hold";

    setTimeout(()=>{
        this.className="fill";
    },0);

}

empties.forEach(empty=>{
    //  console.log(empty);
 
    // empty.addEventListener('dragover',dragover);
    // empty.addEventListener('dragenter',dragenter);
    // empty.addEventListener('dragleave',dragleave);
    // empty.addEventListener('drop',dragdrop);
})

// ES6  can looping object-specific literation
for(const empty of empties){
 empty.addEventListener('dragover',dragover);
 empty.addEventListener('dragenter',dragenter);
 empty.addEventListener('dragleave',dragleave);
 empty.addEventListener('drop',dragdrop);
//    console.log(empty);
}

// Numerial value
// for(const empty in empties){
//     console.log(empty);
// empty.addEventListener('dragover',dragover);
// empty.addEventListener('dragenter',dragenter);
// empty.addEventListener('dragleave',dragleave);
// empty.addEventListener('drop',dragdrop);
// }

function dragend(){
    // console.log('dragend is working');

    this.className="fill";
}

function dragover(e){
    // console.log('drag over');
    e.preventDefault();
}

function dragenter(e){
    // console.log('drag enter');
    e.preventDefault();
    this.className += " hovered"
}

function dragleave(e){
    // console.log('drag leave');
    e.preventDefault();
    this.className="empty";
}

function dragdrop(){
    // console.log('drag drop');
    this.className="empty";
    
    this.appendChild(picdiv);

}



