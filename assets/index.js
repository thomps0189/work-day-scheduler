var date = moment().format("LLLL");
document.getElementById("currentDay").innerHTML = date;

var nine = document.getElementById("9oclock")
var taskText = document.getElementById("tasktext");
var myTasks = [];
var tasks = localStorage.getItem("myTasks") ? JSON.parse(localStorage.getItem("myTasks")) : localStorage.setItem("myTasks", JSON.stringify(myTasks))

// var taskContent = document.getElementById("task-content");
// var listUlEl = document.getElementById("list-todo");
// var mySchedule = []

// $("#task-content").on("click", "input", function() {
//     var text = $(this).text();
//     console.log(text)
// });

// $("#submit-btn").click(function() {
//     console.log("submit button clicked");
// });

// $("#clear-btn").click(function() {
//     console.log("this is the clear button")
// })






// var tasks = localStorage.getItem("mySchedule")
// ? JSON.parse(localStorage.getItem("mySchedule"))
// : localStorage.setItem("mySchedule", JSON.stringify(mySchedule))

// var showCurrentDay = function() {
//     console.log
// }

// console.log(listUlEl)

// $("#task-content").on("click", function() {
//     console.log("Hello")
//     var text = $(this)
//     .text()
//     .trim();
//     var textInput = $("<textarea>")
//     .addClass("form-control")
//     .val(text);
//     $(this).replaceWith(textInput)
// })

// $("#task-content").on("click", function() {
//     if(tasks.length > 0) {
//         tasks.forEach(task => {
//             let listEl = document.createElement("li")
//             listEl.innerText = task
//             listUlEl.appendChild(listEl)
//         })
//     }
// })