// UI
const formel=document.getElementById('form');
const inputel=document.getElementById('input');
const todoul=document.getElementById('todos');

inputel.focus();

let todos=JSON.parse(localStorage.getItem('todos'));
console.log(todos);
// console.log(typeof todos);
if(todos){
    todos.forEach(todo => addtodo(todo));
    console.log('hello');
}


formel.addEventListener('submit',(e)=>{

    // console.log('hay');

    addtodo();

    e.preventDefault();
})

function addtodo(todo){
    // console.log('hey i am working');

    let todotasks=inputel.value;
    
    if(todo){
        console.log("hello");
        todotasks=todo.text;
    }


    if(todotasks){
        const li=document.createElement('li');

        if(todo && todo.complete){
            li.classList.add('completed');
        }


        li.appendChild(document.createTextNode(todotasks));

        todoul.appendChild(li);
        inputel.value='';

        updatelocalstorage();

        // add line through by left click
        li.addEventListener('click',()=>{
            li.classList.toggle('completed');
            updatelocalstorage();
        })

        // right click to delete
        li.addEventListener('contextmenu',(e)=>{
            li.remove();
            // console.log('hay');
            updatelocalstorage();
            e.preventDefault();
        });


    }else{
        window.alert('Enter your todo');
    }

}

function updatelocalstorage(){
    // console.log('storage is rdy');

    const todolis=document.querySelectorAll('li');

    let todos=[];

    todolis.forEach(todoli=>{
        // console.log(todoli);

        todos.push({
            text:todoli.innerText,
            complete:todoli.classList.contains('completed')
        })

    })
    // console.log(todos);
    localStorage.setItem("todos",JSON.stringify(todos));

}

// 22NF ...