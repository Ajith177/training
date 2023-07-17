let circle_excalamation=document.querySelector(".circle-excalamation");
let correct_circle=document.querySelector(".circle-check");

let circle1_excalamation=document.querySelector(".circle-thappu");
let correct1_circle=document.querySelector(".circle-checking");

let circle2_excalamation=document.querySelector(".circle-thappuda");
let correct2_circle=document.querySelector(".circle-sari");

let checkbox=document.getElementById("checkbox");
let checkbox1=document.getElementById("checkbox1");
let checkbox2=document.getElementById("checkbox2");
let thirdpage=document.getElementById("third-page");
let thirdpage_1=document.getElementById("third-page1");
let thirdpage_2=document.getElementById("third-page2");

let display_content1=document.getElementById("division_90");
let display_content2=document.getElementById("division_91");
let display_content3=document.getElementById("division_92");

let fourth_page_value=document.getElementById("para_20");

// let fourth_page=document.getElementById("para_15"); //arcade , advanced ,pro 

let click_event1=document.getElementById("division_1");
let click_event2=document.getElementById("division_2");
let click_event3=document.getElementById("division_3");

let displaying_year1=document.getElementById("para_4");
let displaying_year2=document.getElementById("para_5");
let displaying_year3=document.getElementById("para_6");

// console.log("wertyui",correct_circle);

let first=document.getElementById("image_1")
first.addEventListener("click",()=>{
    let complete=document.getElementById("complete_1");
    complete.style.display="block";
    let daa=document.getElementById("complete_2");
    daa.style.display="none";
    let dbb=document.getElementById("complete_3");
    dbb.style.display="none";
    let dcc=document.getElementById("complete_4");
    dcc.style.display="none";
    let dee=document.getElementById("complete_5");
    dee.style.display="none";
    // }
});


let second=document.getElementById("image_2")
second.addEventListener("click",()=>{

    let aaa=document.getElementById("complete_1");
    aaa.style.display="none";
    let abb=document.getElementById("complete_3");
    abb.style.display="none";
    let acc=document.getElementById("complete_4");
    acc.style.display="none";
    let complete_2=document.getElementById("complete_2");
    complete_2.style.display="block";
    let aee=document.getElementById("complete_5");
    aee.style.display="none";
});

let third=document.getElementById("image_3")
third.addEventListener("click",()=>{
    let complete_3=document.getElementById("complete_3");
    complete_3.style.display="block";
    let baa=document.getElementById("complete_1");
    baa.style.display="none";
    let bbb=document.getElementById("complete_2");
    bbb.style.display="none";
    let bcc=document.getElementById("complete_4");
    bcc.style.display="none";
    let bdd=document.getElementById("complete_5");
    bdd.style.display="none";
});


let fourth=document.getElementById("image_4")
fourth.addEventListener("click",()=>{
    let complete_4=document.getElementById("complete_4");
    complete_4.style.display="block";
    let caa=document.getElementById("complete_1");
    caa.style.display="none";
    let cbb=document.getElementById("complete_2");
    cbb.style.display="none";
    let ccc=document.getElementById("complete_3");
    ccc.style.display="none";
    let cdd=document.getElementById("complete_5");
    cdd.style.display="none";
});

let fifth=document.getElementById("next")
fifth.addEventListener("click",()=>{
let getting_name=document.getElementById("text_name");
let getting_email=document.getElementById("emilr").value;
let pattern= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let getting_phone=document.getElementById("phone");

// console.log("====inpoiiuisf email", getting_name.value.trim().length);
Validate();
function Validate(){
    if(getting_name.value.trim()==""){
        seterror(getting_name,"the name cannot be empty");
    }
    else if(getting_name.value.trim().length < 5 && getting_name.value.trim().length>16){
        console.log("hrllo");
        seterror(getting_name,"The name should be less than the 15 characters");
    }
    else{
        // alert("ajith");  // working....
        console.log("===valid");
        setsucess();
        a=true;
        
    }
   
}
function setsucess(){
    // console.log("===call");
    correct_circle.style.display="block";
    circle_excalamation.style.display="none";
}
function seterror(){
    console.log("dailll");
    circle_excalamation.style.display="block";
    correct_circle.style.display="none";
}

mailverify();

function mailverify(){
   console.log("email",pattern.test(getting_email));
    if(pattern.test(getting_email)){
        console.log("hjgdkjh");
        setsucess1();
        b=true;
    }
    else{
        seterror1();
    }
    
}
verifyphone();

function seterror1(){
    circle1_excalamation.style.display="block";
    correct1_circle.style.display="none";
}
function setsucess1(){
    console.log("ajith the mass")
    circle1_excalamation.style.display="none";
    correct1_circle.style.display="block";
}

function verifyphone(){
    if(getting_phone.value.trim()==""){
        seterror2();
    }
    else{
        setsucess2();
        c=true;
    }
}
function seterror2(){
    circle2_excalamation.style.display="block";
    correct2_circle.style.display="none";
}
function setsucess2(){
    console.log("singam");
    circle2_excalamation.style.display="none";
    correct2_circle.style.display="block";
}
if(a==true && b==true &&  c==true){
    let complete_5=document.getElementById("complete_2");
    complete_5.style.display="block";
    let daa=document.getElementById("complete_1");
    daa.style.display="none";
    let dbb=document.getElementById("complete_3");
    dbb.style.display="none";
    let dcc=document.getElementById("complete_4");
    dcc.style.display="none";
}
else{
    alert("ajith");
}
});

let prajith=document.getElementById("division_1");
prajith.addEventListener("click",()=>
{
    // event.preventDefault();
    prajith.style.borderColor="#6962a6";
    prajith.style.backgroundColor="#f8f9fe";
});

let prajith1=document.getElementById("division_2");
prajith1.addEventListener("click",()=>{

    prajith1.style.borderColor="#6962a6";
    prajith1.style.backgroundColor="#f8f9fe";
});

let prajith2=document.getElementById("division_3");
prajith2.addEventListener("click",()=>{
    prajith2.style.borderColor="#6962a6";
    prajith2.style.backgroundColor="#f8f9fe";
});


let sixth=document.getElementById("nexted")
sixth.addEventListener("click",()=>{
    let saa=document.getElementById("complete_4")
    saa.style.display="block";
    let sbb=document.getElementById("complete_3")
    sbb.style.display="none";
    let scc=document.getElementById("complete_2");
    scc.style.display="none";
    let sww=document.getElementById("complete_1");
    sww.style.display="none";
    let sqq=document.getElementById("complete_5");
    sqq.style.display="none";

});

let seventh=document.getElementById("nexting")
seventh.addEventListener("click",()=>{
    let zaa=document.getElementById("complete_3")
    zaa.style.display="block";
    let zbb=document.getElementById("complete_1")
    zbb.style.display="none";
    let zcc=document.getElementById("complete_2")
    zcc.style.display="none";
    let zdd=document.getElementById("complete_4")
    zdd.style.display="none";
    let zee=document.getElementById("complete_5");
    zee.style.display="none";
});

// let eighth=document.getElementsByClassName("inbetween")
// eighth.addEventListener("click",()=>{
//     let maa=document.getElementById("complete_1")
//     maa.style.display="block";
//     let mbb=document.getElementById("complete_2")
//     mbb.style.display="none";

// });


let nineth=document.getElementById("para_2")
nineth.addEventListener("click",()=>{
    let naa=document.getElementById("complete_2")
    naa.style.display="block";
    let nbb=document.getElementById("complete_3")
    nbb.style.display="none";
    let ncc=document.getElementById("complete_1")
    ncc.style.display("none");
    let ndd=document.getElementById("complete_4")
    ndd.style.display="none";
    let nee=document.getElementById("complete_5");
    nee.style.display="none";
});

let btn1=document.getElementById("month_button");
let btn2=document.getElementById("year_button");
let free1_btn=document.getElementById("para_45");
let free2_btn=document.getElementById("para_46");
let free3_btn=document.getElementById("para_47");
let monthly=document.getElementById("monthly");
let yearly=document.getElementById("yearly");
btn1.addEventListener("click",()=>{

    btn2.style.display="block";
    btn1.disabled=true;
    btn2.disabled = false
    btn2.style.backgroundColor = "#fff"
    btn1.style.backgroundColor = "#052b5c";
    free1_btn.style.display="block";
    free2_btn.style.display="block";
    free3_btn.style.display="block";
    monthly.style.color="grey";
    yearly.style.color="#031f3c";
    displaying_year1.innerHTML="$9/year";
    displaying_year2.innerHTML="$12/year";
    displaying_year3.innerHTML="$15/year";


    //btn2.disabled = false
});

let free_btn=document.getElementById("para_45");
let free4_btn=document.getElementById("para_46");
let free5_btn=document.getElementById("para_47");
let monthly1=document.getElementById("monthly");
let yearly1=document.getElementById("yearly");
// let displaying_month1=document.getElementById("para_4");
// let displaying_month2=document.getElementById("para_5");
// let displaying_month3=document.getElementById("para_6");
btn2.addEventListener("click",()=>{
    btn1.disabled = false
    btn2.disabled=true;
    btn2.style.display="block"
    btn1.style.backgroundColor = "#fff"
    btn2.style.backgroundColor = "#031f3c"
    free_btn.style.display="none";
    free4_btn.style.display="none";
    free5_btn.style.display="none";
    monthly1.style.color="#031f3c";
    yearly1.style.color="grey";
    displaying_year1.innerHTML="$9/month";
    displaying_year2.innerHTML="$12/month";
    displaying_year3.innerHTML="$15/month";

});


checkbox.addEventListener('click',()=>{

    if(checkbox.checked){
        thirdpage.style.backgroundColor="#f8f9fe";
        display_content1.style.display="block";
        // display_content2.style.display="none";
        // display_content3.style.display="none";

        // alert("singam");
    }
    else{
        thirdpage.style.backgroundColor="white";
        display_content1.style.display="none";
        // display_content2.style.display="none";
        // display_content3.style.display="none";
    }
});

checkbox1.addEventListener('click',()=>{
    if(checkbox1.checked){
        thirdpage_1.style.backgroundColor="#f8f9fe";
        // display_content1.style.display="none";
        display_content2.style.display="block";
        // display_content3.style.display="none";
    }
    else{
        thirdpage_1.style.backgroundColor="white";
        // display_content1.style.display="none";
        display_content2.style.display="none";
        // display_content3.style.display="none";
    }
});

checkbox2.addEventListener('click',()=>{
    if(checkbox2.checked){
        thirdpage_2.style.backgroundColor="#f8f9fe";
        // display_content1.style.display="none";
        // display_content2.style.display="none";
        display_content3.style.display="block";

    }
    else{
        thirdpage_2.style.backgroundColor="white";
        // display_content1.style.display="none";
        // display_content2.style.display="none";
        display_content3.style.display="none";
    }
});


let move_page=document.getElementById("move-to-third-page");
move_page.addEventListener("click",(event)=>{
    event.preventDefault();
    let maa=document.getElementById("complete_1");
    maa.style.display="block";
    let mbb=document.getElementById("complete_2");
    mbb.style.display="none";
    let mcc=document.getElementById("complete_3");
    mcc.style.display="none";
    let mdd=document.getElementById("complete_4");
    mdd.style.display="none";
    let mee=document.getElementById("complete_5");
    mee.style.display="none";
});

let move1=document.getElementById("parent");
move1.addEventListener("click",(event)=>{
    event.preventDefault();
    // alert("ajith");  WORKING............
    let gaa=document.getElementById("complete_1");
    gaa.style.display="none";
    let gbb=document.getElementById("complete_2");
    gbb.style.display="block";
    let gcc=document.getElementById("complete_3");
    gcc.style.display="none";
    let gdd=document.getElementById("complete_4");
    gdd.style.display="none";
    let gee=document.getElementById("complete_5");
    gee.style.display="none";
});

let thanks=document.getElementById("thankyoustep");
thanks.addEventListener("click",(event)=>{
    event.preventDefault();
    let faa=document.getElementById("complete_1");
    faa.style.display="none";
    let fbb=document.getElementById("complete_2");
    fbb.style.display="none";
    let fcc=document.getElementById("complete_3");
    fcc.style.display="block";
    let fdd=document.getElementById("complete_4");
    fdd.style.display="none";
    let fee=document.getElementById("complete_5");
    fee.style.display="none";
});

let thankyoupage=document.getElementById("nextes");
thankyoupage.addEventListener("click",(event)=>{
    event.preventDefault();
    let uaa=document.getElementById("complete");
    uaa.style.display="none";
    let ubb=document.getElementById("complete_1");
    ubb.style.display="none";
    let ucc=document.getElementById("complete_2");
    ucc.style.display="none";
    let udd=document.getElementById("complete_3");
    udd.style.display="none";
    let uee=document.getElementById("complete_4");
    uee.style.display="none";
    let uff=document.getElementById("complete_5");
    uff.style.display="block";

});

let change_content=document.getElementById("para_16");
change_content.addEventListener("click",(event)=>{
    event.preventDefault();
    let display_page_2=document.getElementById("complete_2");
    display_page_2.style.display="block";
    let display_page_4=document.getElementById("complete_4");
    display_page_4.style.display="none";
    let display_page_5=document.getElementById("complete_5");
    display_page_5.style.display="none";
});









click_event1.addEventListener("click",(event)=>{
    // DataTransfer("dfdf", "9")
    event.preventDefault();
    let fourth_page_value=document.getElementById("para_17");
    // let second_page_value=document.getElementById("para_4");
    let fourth_page=document.getElementById("para_15"); 
    fourth_page.innerHTML="Arcade";
    fourth_page_value.innerHTML=displaying_year1.textContent;

});

click_event2.addEventListener("click",(event)=>{
    event.preventDefault();
    let fourth_page_1=document.getElementById("para_15");
    fourth_page_1.innerHTML="Advanced";
    let fourth_page_value_1=document.getElementById("para_17");
    fourth_page_value_1.innerHTML=displaying_year2.textContent;

});

click_event3.addEventListener("click",(event)=>{
    event.preventDefault();
    let fourth_page_3=document.getElementById("para_15");
    let fourth_page_value_2=document.getElementById("para_17");
    fourth_page_3.innerHTML="Pro";
    fourth_page_value_2.innerHTML=displaying_year3.textContent;

});