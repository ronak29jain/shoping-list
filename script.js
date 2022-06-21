var inputitem = document.getElementById("inputitem");
var button = document.getElementById("button");
var ul = document.querySelector("ul");

function inputlength() {
    return inputitem.value.length;
}

function additem (){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(inputitem.value));
    ul.appendChild(li)
    inputitem.value = '';
}

function additemafterclick(){
    if (inputlength() > 0){
        additem ();
    }
}

function additemafterkeypress(event){
    if (inputlength() > 0 && event.code === 'Enter'){
        additem();
    }
}

button.addEventListener('click', additemafterclick)

inputitem.addEventListener('keypress', additemafterkeypress)
