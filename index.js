// Write your code here!
const element = document.createElement("div");

document.body.append(element);

const ul = document.createElement("ul");

for(let i = 0 ;i< 3;i++){
    const li =document.createElement("li");
    li.textContent = (i +1).toString();
    ul.append(li);
}

element.append(ul);

//ADD Element to the DOM via innerHTML

//Changes Properties on DOM Nodes

const element2 = document.getElementById("main");
element2.style.height = "300px";
element2.style.backgroundColor = "#27647B";

//Remove Element From DOM 
//we use removeChild() , as you might guess , to remove a particular child of an element\


const ul2 = document.getElementsByTagName("ul")[0];
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

/*what if we want to remove the whole list ul?
ul.remove() */