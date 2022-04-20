

let display = document.querySelector(".display")
let parent = document.querySelector(".parent")
let allBtns = document.querySelectorAll(".btn")


//display.innerText = displayText;
let displayText = "";

for(let btn of allBtns){
btn.addEventListener("click",function(event){
    let store = event.target.innerText
    console.log(store);

    if( store == "*"){
        displayText += store
        display.innerText = displayText
    }
    else if(store == "/"){
        displayText += store
        display.innerText = displayText
    }
    else if(store == "+"){
        displayText += store
        display.innerText = displayText
    }
    else if(store == "-"){
        displayText += store
        display.innerText = displayText
    }
    else if(store == "."){
        displayText += store
        display.innerText = displayText
    }
    else if(store == "0"){
        displayText += store
        display.innerText = displayText
    }
    else if(store == "="){
        display.innerText = eval(displayText)
    }
     else if(store == "C"){
        displayText= "";
      display.innerText= displayText
    } 
    else {
        displayText += store
        display.innerText =   displayText
    } 
})

}
