// display current day and time
var date = moment().format("LLLL");
document.getElementById("currentDay").innerHTML = date;
var myTasks = [];

// fill in and save timeslot items
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
    localStorage.getItem("myTaskList")
         
}

document.getElementById("btn9").addEventListener("click", addTask)





