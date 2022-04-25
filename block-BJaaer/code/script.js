

let form=document.querySelector("form");

let userInfo={};

function handleSubmit(event){
   
    event.preventDefault();
    //console.dir(form);
    alert(userInfo.get('text') +' '+userInfo.get('email')+" "+userInfo.get('gender')+' '+userInfo.get('color')+' '+userInfo.get(terms));
    //console.log(form.elements.email);
 
    //userInfo.name = form.elements.text.value;
        
    //console.log(form);
    //return userInfo;
}

form.addEventListener("submit",handleSubmit);