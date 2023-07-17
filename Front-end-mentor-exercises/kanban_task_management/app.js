
// wasted...
let platform_launch = document.getElementById("launch-event");
let platform_launch_event = document.getElementById("segregate-1");
let platform_launch_event_2 = document.getElementById("segregate-2");
platform_launch.addEventListener("click", (event) => {
    event.preventDefault();
    platform_launch_event.style.display = "block";
    platform_launch_event_2.style.display = "none";
});



// making the popup while clicking the three dots.....         //  sucesss
let new_task = document.getElementById("dot");
new_task.addEventListener("click", (event) => {
    let displaying_board = document.getElementById("Board-edits");
    event.preventDefault();
    displaying_board.style.display = "block";

});

// hiding the popup which activates on clicking three dots....  // sucess
let new_task_1 = document.getElementById("dot");
new_task_1.addEventListener("dblclick", (event) => {
    let displaying_board_1 = document.getElementById("Board-edits");
    event.preventDefault();
    displaying_board_1.style.display = "none";

});

// making the popup..                                              // sucess
let adding_of_new_task = document.getElementById("Adding-new-task");
adding_of_new_task.addEventListener("click", (event) => {
    let message = document.getElementById("popupmessage-1");
    let first = document.getElementById("First-section");
    event.preventDefault();
    message.style.display = "block";
    first.setAttribute("class", "blur");
    // second.setAttribute("class","blur");

    // first.style.backdropFilter=blur(5);              
    // backdrop-filter: blur(5px);
    // first.onblur();
    // message.focus();
    // first.style.backgroundColor="black";
    // first.style.background= rgba(100, 100, 100, 0.5);
});


// hiding the popup                                               // sucesss
let adding_of_new_task_1 = document.getElementById("Adding-new-task");
adding_of_new_task_1.addEventListener("dblclick", (event) => {
    let message_1 = document.getElementById("popupmessage-1");
    let second_in_1 = document.getElementById("First-section");
    event.preventDefault();
    message_1.style.display = "none";
    second_in_1.setAttribute("class", "unblur");

});


// // After clicking the add task button...                      // on progress
let subtasks = document.getElementById("add-subtask-btn");
console.log("Subtask",subtasks)
subtasks.addEventListener("click",(event)=>{
    event.preventDefault();

    adding();

    function adding()
    {
    const input_container = document.getElementById("paragraph-30-2");
    let input = document.createElement("input");
    let x_mark=document.getElementById("x-mark");
    input_container.appendChild(input);
    input_container.appendChild(x_mark);
    input_container.setAttribute("class","input");
    
    }


});


// hiding the popup thta show on the page............................................  // sucess
let normal_page = document.getElementById("back-to-the-position");
let popupmessage_2 = document.getElementById("popupmessage-1");
let unblurring = document.getElementById("First-section");
normal_page.addEventListener("click", (event) => {
    event.preventDefault();
    popupmessage_2.style.display = "none";
    unblurring.setAttribute("class", "unblur")
});