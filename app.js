function onReady(){
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo(){
    if(!newToDoText.value) {return;}
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++
    });



    newToDoText.value = "";

    renderTheUI();
  }

  function deleteToDo(x) {
    toDos = toDos.filter(item => item.id !== x);
    return toDos;


  };

  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');



    toDoList.textContent ="";

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type= "checkbox";
      const deleteButton = document.createElement('input');
      deleteButton.type="button";
      deleteButton.value="Delete";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);


      deleteButton.addEventListener('click', event => {
      deleteToDo(toDo.id);
      renderTheUI();
      });

        });
    }



  addToDoForm.addEventListener("submit", event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = "";
  });

  renderTheUI();

}

window.onload = function(){
  alert("The window had loaded!");
  onReady();

};
