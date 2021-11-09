var date = moment().format("LLLL");
document.getElementById("currentDay").innerHTML = date;

var taskContent = document.getElementById("task-content");
var listUlEl = document.getElementById("list-todo");
var mySchedule = []


function addLi() {
    var textVal = document.getElementById("textVal").value,
    listNode = document.getElementById("list-todo"),
    liNode = document.createElement("LI"),
    textNode = document.createTextNode(textVal);

    liNode.appendChild(textNode);
    listNode.appendChild(liNode);
}

function addLi10() {
    var textVal = document.getElementById("textVal").value,
    listNode = document.getElementById("list-todo"),
    liNode = document.createElement("LI"),
    textNode = document.createTextNode(textVal);

    liNode.appendChild(textNode);
    listNode.appendChild(liNode);
}

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