function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById("toDoList");

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type ="checkbox";

    // create a new delete input
    let deleteButton = document.createElement('input');

    // set input's type to delete
    deleteButton.type="button";

    deleteButton.value="Delete";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the deleteButton to the li
    newLi.appendChild(deleteButton);

    // attach the li at the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value ="";

    deleteButton.onclick=function(){
        newLi.parentNode.removeChild(newLi);
      }
  });

}

window.onload = function(){
  alert("The window had loaded!");
  onReady();

};
