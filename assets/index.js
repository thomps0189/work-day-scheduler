// display current day and time
var date = moment().format("LLLL");
document.getElementById("currentDay").innerHTML = date;

// fill in and save timeslot items
var myTasks = [];

var addTask = (event) =>{
    event.preventDefault();

    let task = {
        id: Date.now(),
        tasktxtarea: document.getElementById("tasktext").value, 
    }
    
    myTasks.push(task);

    console.log("added", myTasks)
    // let textarea = document.querySelector("textarea");
    // textarea.textContent = '\n' + JSON.stringify(myTasks, '\t', 2);

    // save to local storage
    localStorage.setItem("MyTaskList", JSON.stringify(myTasks));
    var x = localStorage.getItem("MyTasksList");
    document.getElementById("tasktext").innerHTML = x
    
    // for (let i = 0; i < localStorage.length; i++) {
    //     var key = localStorage.key(i);
    //     var value = localStorage.getItem(key);

    //     myTasks.innerHTML += `${key}: ${value}`
    // }
         
}

document.getElementById("btn9").addEventListener("click", addTask)





