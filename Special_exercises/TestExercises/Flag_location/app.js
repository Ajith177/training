let closing_tag=document.getElementById("closeIcon");


let showcase=document.getElementById("section_1");
showcase.addEventListener("click",()=> 
{
    let url=`https://restcountries.com/v3.1/all`;
    fetch(url).then((response)=>response.json()).then((response)=>{
       // console.log(response[0])

        for(i=0;i<=230;i++){
           // console.log(response[i].flags.alt)

        let section_part_2=document.getElementById("section_2")
        let creating_element = document.createElement("div");
        let image_creation=document.createElement("img");
        let creating_paragraph=document.createElement("p");
        
        let image_source=response[i].flags.svg;
         image_creation.setAttribute("src",image_source)
         image_creation.setAttribute("width","200px");
         image_creation.setAttribute("height","200px")

        
         creating_paragraph.innerHTML=response[i].name.common

         creating_element.appendChild(image_creation);
         creating_element.appendChild(creating_paragraph);
         section_part_2.appendChild(creating_element);

          function showdetails()
          {
                let image_getting=document.getElementById("image_1");
                image_getting.src=image_source;

                let para_getting = document.getElementById("para_1");
                para_getting.innerHTML= JSON.stringify(response[i].flags.alt);


                openpopup();
          }

         image_creation.onclick=()=>
         {
            //console.log(image_creation.src);
            showdetails()
         }

        }

    })
})

function openpopup(){
    popup.style.display="block";
    popupbackground.style.display="block";
}
closing_tag.addEventListener("click",()=>{
    popup.style.display="none";
    popupbackground.style.display="none";
})

