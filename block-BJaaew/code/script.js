
let parentElm=document.querySelector(".mainbox");
let searchBar=document.querySelector(".searchBar");
let gotcharacters=[];



searchBar.addEventListener('keyup',(e)=>{
  const searchString=e.target.value.toLowerCase();


  const filterCharacters=gotcharacters.filter(character => {
    return character.name.toLowerCase().includes(searchString) ||
     character.house.toLowerCase().includes(searchString);
  });

  allpeople(filterCharacters);

});



let loadcharacters=(async () => {
  const gotcharacters = './data.js';
   gotcharacters = await import(gotcharacters);
  //gotcharacters.default();
  //gotcharacters.doStuff();
  allpeople(gotcharacters);
 
})();


allpeople=got.houses.reduce((acc,cv)=>{
  acc=acc.concat(cv.people);
  return acc;
},[]);


let cardsHTML=allpeople.map((person)=>{
  return `<li class="card">
  <div class="info">
  <img
    src=${person.image}
    alt=${person.name}
  />
  <h2>${person.name}</h2>
  </div>
  <p>
  ${person.description}
  </P>
  <a href=${person.wikilink}>Learn More</a>
  </li>
  `
});
parentElm.innerHTML=cardsHTML.join("");


/*
let loadcharacters=(async () => {
  const moduleSpecifier = './data.js';
  const module = await import(moduleSpecifier)
  module.default();
  module.doStuff();
 
})();*/