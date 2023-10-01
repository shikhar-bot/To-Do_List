const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value === ''){
        alert('You must write something!')
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // adding cross icon at the end of the element to remove the element from the list
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }

    // to clear the input box after adding element
    inputBox.value = "";
    saveData();
}

// If we will click on particular task, it will be checked or unchecked
listContainer.addEventListener("click", function(e){
    // LI is particular list or element 
    // if we click on list it will checked 
    // and if it already checked then it will unchecked
    // Because of toggle keyword
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    // Here SPAN is the cross button that removes the element
    // if we click on cross button then element will be removed 
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// We have to store tasks in our browser. So whenever be open
// browser again then task will displayed as it is.
function saveData(){
    // So whatever content is in the list container
    // that will be stored in out browser with the name of data
    localStorage.setItem("data", listContainer.innerHTML);
}

// We have to display the data whenever we open our browser again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();