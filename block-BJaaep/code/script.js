//let card=document.createElenent('card');
/*
let boxes=document.querySelector('boxes');

card.addEventListener('click',flipCard);

function flipCard(){
    card.classList.toggle("flipCard")
    console.log(flipCard);
}


let div=div.createElement('.boxes');
div.classList.add('box');

card.append(div);

function handler(event){
console.log(event);

}
let count=0
cards.forEach(element => {
    element.innerText= number(0+1);
    count=count+1;
});

*/

//let root=document.querySelector(".wrapper");
let boxex=document.querySelector('.boxes')
let card=document.querySelector('li.box')
card.append(boxex);
//function flipCard(){
//    boxes.classList.toggle("flipCard");
//}



//root.append(boxes);




function flipCard(event){
	let element = event.currentTarget;
	if (element.className === "box") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};

card.forEach(box => {
let div=document.querySelector('div');
div.className="box";

div.addEventListener("click",flipCard);

});

div.addEventListener("click",function(event){
    flipCard(card,event);

    card.append(div);
} );