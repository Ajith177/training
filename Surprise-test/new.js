const inputbox=document.getElementById("input-box");
const list_container=document.getElementById("list-container");
let button_clicks=document.getElementById("Button-clicking");


button_clicks.addEventListener("click",(event)=>{
    event.preventDefault();
    if(inputbox.value ===""){
        alert("Please fill out the fields");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        list_container.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value=" ";
    saveData();
});

list_container.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// Its time for the local storage................................................................    

function saveData(){
    localStorage.setItem("data",list_container.innerHTML);
}

function showTask(){
    list_container.innerHTML=localStorage.getItem("data");
}
showTask();