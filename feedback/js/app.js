const panel=document.querySelector('.panel-container');
const ratingcontainer=document.querySelector('.rating-container');
const ratings=document.querySelectorAll('.rating');
const sendbtn=document.querySelector('#send');

let selectdrating="Satisfied";

ratingcontainer.addEventListener("click",(e)=>{
    // console.log('hay');
    // console.log(e.target);

    // if(e.target.classList.contains('rating')){
        // console.log(e.target);
    // }

    if(e.target.parentNode.classList.contains('rating')){
        // console.log(e.target);
        removeactive();

        e.target.parentNode.classList.add('active');

        // selectdrating=e.target.nextElementSibling.textContent;

        selectdrating=e.target.parentNode.lastElementChild.textContent;
        // console.log(selectdrating);        
    }else if(e.target.classList.contains('rating')){
        removeactive();
        e.target.classList.add('active');
        selectdrating=e.target.lastElementChild.textContent;

    }

})

function removeactive(){
    for(let i=0;i<ratings.length;i++){
        ratings[i].classList.remove('active');
    }
}



sendbtn.addEventListener('click',()=>{

    panel.innerHTML=`
        <i class="fas fa-heart fa-2x" style="color:red"></i>
        <strong>Thank You!</strong>
        <strong>Feedback : ${selectdrating}</strong>
        <p>We'll use your feedback to improve our customer service</p>
    `

});


