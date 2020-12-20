const toDoForm = document.querySelector(".js-toDOForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList= document.querySelector(".js-toDoList");

const TODOS_LS= "toDos"

let toDos =[];



function deleteToDo(event){
    const btn =event.target;
    const li =btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
         return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos
    saveToDos();

}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));

}


function paintToDo(text){
    console.log(text);
    const li = document.createElement('li');
    li.setAttribute("class","toDo");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    span.setAttribute("class","toDo__button");
    const newId = toDos.length +1;
    // button.setAttribute("class","toDo_button");
    delBtn.innerText ="❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText=text;
    
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    li.id=newId;
    const toDoObj={
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    // 푸시한 이후에 호출하기 
    saveToDos();

}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}
function loadToDos(){
    const loadedToDos =localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parseToDos =JSON.parse(loadedToDos);
        parseToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
        
    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);


}
init();