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

button.addEventListener('click', function(){
    if (inputlength() > 0){
        additem ();
    }
})

inputitem.addEventListener('keypress', function(event){
    if (inputlength() > 0 && event.code === 'Enter'){
        additem();
    }
})
''