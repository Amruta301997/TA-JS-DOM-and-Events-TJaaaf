/*
let form=document.querySelector(form);

let usernameError= "";


function containNumber(str){
    return str.split('').some(e=>Number(e));
}


function handleSubmit(event){
    event.preventDefault();

    console.dir(event.target);

let usernameElm=event.target.elements.username;
let phoneNumElm=event.target.elements.phone;

if(usernameElm.value === ""){
    usernameError ="enter username";
}
else if(usernameElm.value.length<4){
    usernameError="Username can't be less than 4 characters"
}
usernameElm.nextElementSibling.innerText=usernameError;
//else if(ttt){}

}

form.addEventListner("submit",handleSubmit)

*/


const form=document.getElementById('form');
const username=getElementById('username');
const name1=getElementById('name1');
const email=getElementById('email');
const phone=getElementById('phone');
const password=getElementById('password');
const confirm=getElementById('confirm');


form.addEventListener('submit', (e)=>{
e.preventDefault();

checkInputs();
});


function checkInputs(){
    let usernameValue = username.value.trim();
    let nameValue = name1.value.trim();
    let emailValue = email.value.trim();
    let phoneValue = phone.value.trim();
    let passwordValue = password.value.trim();
    let confirmValue =confirm.value.trim();



    if(usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username,'username cannot be blank');

    }
    else {
        setSuccessFor(username);
    }
    if(emailValue === ''){
        //show error
        //add error class
        setErrorFor(email,'email cannot be blank');
    }
    else if(emailValue){
        setErrorFor(email,'email is not valid');
    }
    else{
        setSuccessFor(email);
    }

    if(passwordValue ===''){
        setErrorFor(password,'password cannot b blank');
    }
    else{
        setSuccessFor(password);
    }

    if(confirmValue ===''){
        setErrorFor(confirm,'password cannot b blank');
    }
    else if(passwordValue !== confirmValue){
        setErrorFor(confirm,'password does not match');
    }
    else{
        setSuccessFor(confirm);
    }

}

function setErrorFor(input,message){
    let formControl=input.parentElement;
    let small=formControl.querySelector('small');

    small.innerText=message;

    formControl.className='form-control error';

}
function setSuccessFor(input){
    let formControl = input.parentElement;
    formControl.className='form-control success';
}