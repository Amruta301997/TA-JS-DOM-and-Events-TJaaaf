
let first=document.querySelector('.first');

let second=document.querySelector('.second');


 first.addEventListener("click", function(){
    randomBgColor();
})


second.addEventListener("mousemove", function(){
    randomBgColor();
})

function randomBgColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
   var z = Math.floor(Math.random() * 256);
    var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    //let bgColor=rgb(89,125,184);

    console.log(bgColor);
    document.body.style.background = bgColor;
    banner.style.backgroundColor = bgColor;
} 





/*first.addEventListener('click',function(){
    console.log("you clicked me!");

});

second.addEventListener('mousemove',function(){
    alert("moving cursor,changes color");
});*/