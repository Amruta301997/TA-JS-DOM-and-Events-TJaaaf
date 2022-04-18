
//let grid = document.querySelector('#container');


const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(20, 20);


let grid = document.querySelector('#container');
grid.addEventListener("mousemove",function(){
    bgColor();
})

function bgColor(){

    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    var color = 'rgb(' + x + ',' + y + ',' + z + ')';

    console.log(color);

    container.style.backgroundColor= color;
}


