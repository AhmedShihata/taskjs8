
let title = document.getElementsByTagName("title")
let head = document.getElementById("headertitle");
let cont = document.getElementById("container");
let carpro = document.getElementById("card");

// ############################################

title.textContent = "My Products";
console.log(title.textContent);

// ############################################

head.textContent = "Our Products";
console.log(head.textContent);

// ############################################

head.style.color="blue"
head.style.fontSize="30px"
head.style.textAlign="center"
head.style.padding="20px"
cont.style.display="flex"
cont.style.margin="0 30px 0 30px"
cont.style.justifyContent="space-evenly"
cont.style.flexWrap="wrap"

// ############################################

carpro.classList.add("card");
console.log(carpro);

// ############################################

console.log(carpro.classList.contains("card"));

// ############################################

carpro.classList.remove("card");
console.log(carpro);

// ############################################

cont.setAttribute("data-id","101");
console.log(cont.dataset.id);

cont.removeAttribute("data-id");
console.log(cont.dataset.id);

// ############################################

let newcarpro = document.createElement("div")
let cartit = document.createElement("h3")
let carph = document.createElement("p")

newcarpro.className = "cd"
newcarpro.id = "card"

// cartit.textContent = "Laptop"
// carph.textContent = "20000 EGP"

newcarpro.innerHTML = `
    <h3>Laptop</h3>
    <p>20000 EGP</p>`

newcarpro.appendChild(cartit)
newcarpro.appendChild(carph)
// append in container 
cont.appendChild(newcarpro)


// ############################################
// FirstProduct
let fristpro = cont.querySelector("cd")
fristpro = cont.firstElementChild;
console.log(fristpro);
// lastProduct
let lastpro = cont.lastElementChild;
console.log(lastpro);

