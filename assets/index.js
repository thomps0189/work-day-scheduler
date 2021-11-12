// display current day and time
var date = moment().format("LLLL");
document.getElementById("currentDay").innerHTML = date;

moment.suppressDeprecationWarnings = true;
// fill in and save timeslot items
var myTasks = [];
var nineOclock = document.getElementById("nineoclock");
// call function to get data

var savedTasks = function() {
    localStorage.getItem("myTasks")
    if (savedTasks) {
        savedTasks = JSON.parse(localStorage.getItem("myTasks"))
    } else {
        localStorage.getItem("myTasks", JSON.stringify(myTasks))
    };
};

function retrieveTasks() {
    if (savedTasks.length > 0) {
        savedTasks.forEach(task => {
            console.log("this task is: ", task);
            nineOclock.children[0].children[1].value = task.tasktxtarea
        })
    }
}
    

retrieveTasks();



var addTask = (event) =>{
    event.preventDefault();

    let task = {
        id: Date.now(),
        tasktxtarea: document.getElementById("tasktext").value, 
    }
    
    myTasks.push(task);

    console.log("added", myTasks)
    

    // save to local storage
    localStorage.setItem("myTasks", JSON.stringify(myTasks));
    

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
    var hourBlockNumberNine = 9;
    var hourBlockNumberTen = 10;
    var hourBlockNumberEleven = 11;
    var hourBlockNumberTwelve = 12;
    var hourBlockNumberOne = 13;
    var hourBlockNumberTwo = 14;
    var hourBlockNumberThree = 15;
    var hourBlockNumberFour = 16;
    var hourBlockNumberFive = 17;


    var nineBackGround = document.querySelector(".description-nine")
    var tenBackGround = document.querySelector(".description-ten")
    var elevenBackGround = document.querySelector(".description-eleven")
    var twelveBackGround = document.querySelector(".description-twelve")
    var oneBackGround = document.querySelector(".description-one")
    var twoBackGround = document.querySelector(".description-two")
    var threeBackGround = document.querySelector(".description-three")
    var fourBackGround = document.querySelector(".description-four")
    var fiveBackGround = document.querySelector(".description-five")

   
// nine O'Clock
    if (hourBlockNumberNine < presentTime) {
        nineBackGround.classList.add("past")
        nineBackGround.classList.remove("present")
        nineBackGround.classList.remove("future")
    }

    if (hourBlockNumberNine === presentTime) {
        nineBackGround.classList.add("present")
        nineBackGround.classList.remove("past")
        nineBackGround.classList.remove("future")
    }

    if (hourBlockNumberNine > presentTime) {
       nineBackGround.classList.add("future")
       nineBackGround.classList.remove("past")
       nineBackGround.classList.remove("present")
    }
// Ten O Clock
    if (hourBlockNumberTen < presentTime) {
        tenBackGround.classList.add("past")
        tenBackGround.classList.remove("present")
        tenBackGround.classList.remove("future")
    }

    if (hourBlockNumberTen === presentTime) {
        tenBackGround.classList.add("present")
        tenBackGround.classList.remove("past")
        tenBackGround.classList.remove("future")
    }

    if (hourBlockNumberTen > presentTime) {
        tenBackGround.classList.add("future")
        tenBackGround.classList.remove("past")
        tenBackGround.classList.remove("present")
    }
// Eleven o clock
    if (hourBlockNumberEleven < presentTime) {
        elevenBackGround.classList.add("past")
        elevenBackGround.classList.remove("present")
        elevenBackGround.classList.remove("future")
    }

    if (hourBlockNumberEleven === presentTime) {
        elevenBackGround.classList.add("present")
        elevenBackGround.classList.remove("past")
        elevenBackGround.classList.remove("future")
    }

    if (hourBlockNumberEleven > presentTime) {
        elevenBackGround.classList.add("future")
        elevenBackGround.classList.remove("past")
        elevenBackGround.classList.remove("present")
    }
// 12 o clock
if (hourBlockNumberTwelve < presentTime) {
    twelveBackGround.classList.add("past")
    twelveBackGround.classList.remove("present")
    twelveBackGround.classList.remove("future")
}

if (hourBlockNumberTwelve === presentTime) {
    twelveBackGround.classList.add("present")
    twelveBackGround.classList.remove("past")
    twelveBackGround.classList.remove("future")
}

if (hourBlockNumberTwelve > presentTime) {
    twelveBackGround.classList.add("future")
    twelveBackGround.classList.remove("past")
    twelveBackGround.classList.remove("present")
}
// 1 o clock
if (hourBlockNumberOne < presentTime) {
    oneBackGround.classList.add("past")
    oneBackGround.classList.remove("present")
    oneBackGround.classList.remove("future")
}

if (hourBlockNumberOne === presentTime) {
    oneBackGround.classList.add("present")
    oneBackGround.classList.remove("past")
    oneBackGround.classList.remove("future")
}

if (hourBlockNumberOne > presentTime) {
    oneBackGround.classList.add("future")
    oneBackGround.classList.remove("past")
    oneBackGround.classList.remove("present")
}
// 2 o clock
if (hourBlockNumberTwo < presentTime) {
    twoBackGround.classList.add("past")
    twoBackGround.classList.remove("present")
    twoBackGround.classList.remove("future")
}

if (hourBlockNumberTwo === presentTime) {
    twoBackGround.classList.add("present")
    twoBackGround.classList.remove("past")
    twoBackGround.classList.remove("future")
}

if (hourBlockNumberTwo > presentTime) {
    twoBackGround.classList.add("future")
    twoBackGround.classList.remove("past")
    twoBackGround.classList.remove("present")
}
// 3 o clock
if (hourBlockNumberThree < presentTime) {
    threeBackGround.classList.add("past")
    threeBackGround.classList.remove("present")
    threeBackGround.classList.remove("future")
}

if (hourBlockNumberThree === presentTime) {
    threeBackGround.classList.add("present")
    threeBackGround.classList.remove("past")
    threeBackGround.classList.remove("future")
}

if (hourBlockNumberThree > presentTime) {
    threeBackGround.classList.add("future")
    threeBackGround.classList.remove("past")
    threeBackGround.classList.remove("present")
}
// 4 o clock
if (hourBlockNumberFour < presentTime) {
    fourBackGround.classList.add("past")
    fourBackGround.classList.remove("present")
    fourBackGround.classList.remove("future")
}

if (hourBlockNumberFour === presentTime) {
    fourBackGround.classList.add("present")
    fourBackGround.classList.remove("past")
    fourBackGround.classList.remove("future")
}

if (hourBlockNumberFour > presentTime) {
    fourBackGround.classList.add("future")
    fourBackGround.classList.remove("past")
    fourBackGround.classList.remove("present")
}
// 5 o clock
if (hourBlockNumberFive < presentTime) {
    fiveBackGround.classList.add("past")
    fiveBackGround.classList.remove("present")
    fiveBackGround.classList.remove("future")
}

if (hourBlockNumberFive === presentTime) {
    fiveBackGround.classList.add("present")
    fiveBackGround.classList.remove("past")
    fiveBackGround.classList.remove("future")
}

if (hourBlockNumberFive > presentTime) {
    fiveBackGround.classList.add("future")
    fiveBackGround.classList.remove("past")
    fiveBackGround.classList.remove("present")
}
};

timeBlockHour()

document.getElementById("btn9").addEventListener("click", addTask)





