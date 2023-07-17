
const url=("https://api.dictionaryapi.dev/api/v2/entries/en/");
let input_data=document.getElementById("text_name");
let submit=document.getElementById("submit");
let division_2=document.getElementById("division_2");
let heading=document.getElementById("heading");
let heading_1=document.getElementById("heading_1");
let heading_3=document.getElementById("heading_3");
let heading_7=document.getElementById("heading_7");
let partOfSpeech=document.getElementById("para_20");
let fourth=document.getElementById("fourth");
let fifth=document.getElementById("fifth");
let last=document.getElementById("line");
let complete=document.getElementById("complete");



let dark_mode=document.getElementById("moon");
let divide=document.getElementById("divide_1");
dark_mode.addEventListener("click",()=>
{
  divide.style.backgroundColor="black";
  divide.style.color="white";
});

let mode=document.getElementById("moon");
let dividing=document.getElementById("divide_1");
mode.addEventListener("dblclick",()=>{
  dividing.style.backgroundColor="white";
  dividing.style.color="black";
});


submit.addEventListener("click",(event)=>{
  event.preventDefault();
  let input=document.getElementById("text_name").value;
  fetch(`${url} ${input}`).then ((response)=>response.json()).then ((response)=>{
    console.log(response);
    heading.innerHTML=input;
    heading_3.innerHTML=response[0].meanings[0].partOfSpeech;
    heading_7.innerHTML=response[0].meanings[0].synonyms;
    partOfSpeech.innerHTML=response[0].meanings[1].partOfSpeech;
    fourth.innerHTML= response[0].meanings[1].definitions[0].definition ;
    fifth.innerHTML="<q>" + response[0].meanings[1].definitions[0].example+ "</q>";
    last.innerHTML=response[0].sourceUrls;
    heading_1.innerHTML=response[0].phonetic;
    let description = response[0].meanings[0].definitions;
    for(let i=0;i<description.length;i++){
      let ul = document.getElementById("content");
      let li=document.createElement("li");
      li.innerHTML=description[i].definition;
      ul.appendChild(li);
    }
   let language=document.getElementById("languages")
   language.addEventListener("click",()=>{
    let long=language.value;
    switch(long){

    case "cursive":
      complete.style.fontFamily="cursive";
      break;
    
    case "fantasy":
      complete.style.fontFamily="fantasy";
      break;

    case "verdana":
      complete.style.fontFamily="verdana";
      break;

    case "timesnewroman":
      complete.style.fontFamily="timesnewroman";
      break;

    default :
    complete.style.fontFamily="timesnewroman";
    break;
   }
   });
    

})
});


let chk = document.getElementById("chk");
chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

