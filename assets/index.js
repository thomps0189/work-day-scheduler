var date = moment().format("LLLL");
document.getElementById("currentDay").innerHTML = date;
var button = document.querySelector(".btn");
var newTask = document.getElementById("task");

var nine = document.getElementById("9oclock")
var taskText = document.getElementById("tasktext");
var myTasks = [];
var tasks = localStorage.getItem("myTasks") ? JSON.parse(localStorage.getItem("myTasks")) : localStorage.setItem("myTasks", JSON.stringify(myTasks))

function handleSubmitEvent(event) {
    event.preventDefault()
    var inputValue = tasks.value 

    if (!inputValue) {
        console.log("enter a tasks")
        return
    }
    tasks.push(inputValue)
    localStorage.setItem("myTasks", JSON.stringify(tasks))


}


button.addEventListener("submit", handleSubmitEvent)

