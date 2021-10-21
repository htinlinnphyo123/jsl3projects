// UI
const background=document.getElementById('background');
const password=document.getElementById('password');
const eyeicon=document.getElementById('eye');

password.addEventListener('input',(e)=>{
    // console.log('hay');

    const input=e.target.value;
    const inlength=input.length;
    // console.log(20 - inlength*2);

    const blurvalue=20- inlength*2;
    background.style.filter=`blur(${blurvalue}px)`;
})

eyeicon.addEventListener('click',(e)=>{

    if(eyeicon.classList.contains('fa-eye')){

        // Show password
        //method one
        // eyeicon.classList.remove('fa-eye');
        // eyeicon.classList.add('fa-eye-slash');
        
        //method2
        eyeicon.classList.replace('fa-eye','fa-eye-slash');        

        password.setAttribute('type','text');
        

    }else{
        // hide password
        //method1
        // eyeicon.classList.remove('fa-eye-slash');
        // eyeicon.classList.add('fa-eye');
        
        //method2
        eyeicon.classList.replace('fa-eye-slash','fa-eye');
        
        password.setAttribute('type','password');
    }


})