// display current day and time
var date = moment().format("LLLL");
document.getElementById("currentDay").innerHTML = date;

// fill in and save timeslot items
var myTasks = [];
// call function to get data

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
    // var x = localStorage.getItem("MyTasksList");
    // document.getElementById("tasktext").innerHTML = x
    
    // for (let i = 0; i < localStorage.length; i++) {
    //     var key = localStorage.key(i);
    //     var value = localStorage.getItem(key);

    //     myTasks.innerHTML += `${key}: ${value}`
    // }

    if (moment().isAfter(date)) {
        $(task).addClass("list-group-item-danger");
    } else if (Math.abs(moment().diff(time, "days")) <= 2) {
        $(task).addClass("list-group-item-warning");
    }
         
}

var timeBlockHour = function() {
    // what is the present time in hours
    var presentTime = moment().hour();
    console.log(presentTime);

    // what is the block of time in hours
    // var hourBlockNumber = document.getElementsByClassName("hour9");

    // Do I need to differintiate between am and pm
    
    var hourBlock = parseInt("6block") + 12;
    console.log(hourBlock)

    // $(".hour").each(function() {
    //     var hourBlock = parseInt($(this).attr(".hour").split(".hour")[1]);
    // })

    if (hourBlock < presentTime) {
        $("textarea").addClass("past")
    }

    if (hourBlock === presentTime) {
        $("textarea").addClass("present")
    }

    if (hourBlock > presentTime) {
        $("textarea").addClass("future");
        $("textarea").removeClass("past");
    }

    // var hourBlock6 = parseInt("9block")
    // console.log(hourBlock)

    // // $(".hour").each(function() {
    // //     var hourBlock = parseInt($(this).attr(".hour").split(".hour")[1]);
    // // })

    // if (hourBlock6 < presentTime) {
    //     $("textarea").addClass("past")
    // }

    // if (hourBlock6 === presentTime) {
    //     $("textarea").addClass("present")
    // }

    // if (hourBlock6 > presentTime) {
    //     $("textarea").addClass("future");
    //     $("textarea").removeClass("past");
    // }
}

timeBlockHour()

document.getElementById("btn9").addEventListener("click", addTask)





