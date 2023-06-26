let closing_tag=document.getElementById("closeIcon");

let section_part_2=document.getElementById("section_2")
let showcase=document.getElementById("showing");
// let selectedopt=document.getElementById("selectoption");
showcase.addEventListener("click",()=> 
{
    // alert("hello")
    let url=`https://restcountries.com/v3.1/all`;
    fetch(url).then((response)=>response.json()).then((response)=>{
    //   console.log(response)

        for(let i=0;i<=250;i++)
        {
       
        let creating_element = document.createElement("div");
        let image_creation=document.createElement("img");
        let creating_paragraph=document.createElement("p");
        let captureDesc = response[i].flags.alt;
        
         let image_source=response[i].flags.svg;
         image_creation.setAttribute("src",image_source);
        //  image_creation.setAttribute("width","400px");
        //  image_creation.setAttribute("height","200px");
         image_creation.setAttribute("border","2px");
         image_creation.style.width="100px";
         image_creation.style.height="100px";
         image_creation.style.objectFit="cover";
         
        
         creating_paragraph.innerHTML=response[i].name.common;
         let getting_name =response[i].name.common;
       
         creating_element.appendChild(image_creation);
         creating_element.appendChild(creating_paragraph);
         section_part_2.appendChild(creating_element);

         tor(getting_name,image_source,captureDesc)

         function showdetails()
          {
                let image_getting=document.getElementById
                ("image_1");
                image_getting.src=image_source;


                let para_getting = document.getElementById("para_1");
                para_getting.innerHTML= captureDesc

                openpopup();
          }

         image_creation.onclick=()=>
         {
        
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

});

let arr=[]
//console.log("arr", arr)
        function tor(input1,input2,input3) 
        {

            // data.filter((item))
            var input={
                input1,
                input2,
                input3
            }
            // console.log("value", input)
            arr.push(input)
            // dataFinal(arr)

            console.log(arr)
        }
       function ascending(arr)
        {
            let data=arr.sort((a, b) => a.input1.localeCompare(b.input1));
            display(data);
            //console.log(b)
        }
        
        function descending(arr)
        {
            let data=arr.sort((a, b) => b.input1.localeCompare(a.input1));
            display(data);
           // console.log(b)
        }
        
        // function ascending_populaton(arr)
        // {
        //     let b=arr.sort((a, b) => a.population-b.population);
        //     displaycards(b)
        //     //console.log(b)
        // }
        
        // function decending_population(arr)
        // {
        //     let b=arr.sort((a, b) => b.population-a.population);
        //     displaycards(b)
        //     //console.log(b)
        // }

let queen=document.getElementById("search");
queen.addEventListener("input",()=>
{
    section_part_2.innerHTML="";
    let search_data = queen.value;
  //  console.log("search_data", search_data)
    let searcharr = arr.filter((element) => {
        if (element.input1.toLowerCase().includes(search_data.toLowerCase())) {
            return true
        }
    })
    console.log("data1",searcharr);
    display(searcharr)
})

function display(datas)
{
    section_part_2.innerHTML="";
    for(let data of datas)
    {
    let section_part_2=document.getElementById("section_2")
    let creating_element = document.createElement("div");
    let image_creation=document.createElement("img");
    let creating_paragraph=document.createElement("p");
   // let captureDesc = response[i].flags.alt;
    
     let image_source=data.input2;
     image_creation.setAttribute("src",image_source);
    //  image_creation.setAttribute("width","200px");
    //  image_creation.setAttribute("height","200px");
     image_creation.setAttribute("border","2px");
     image_creation.width=400;
     image_creation.height=200;
    
     creating_paragraph.innerHTML=data.input1;
     let getting_name =data.input1;
   
     creating_element.appendChild(image_creation);
     creating_element.appendChild(creating_paragraph);
     section_part_2.appendChild(creating_element);

    // tor(getting_name,image_source,captureDesc)

     function showdetails()
      {
            let image_getting=document.getElementById
            ("image_1");
            image_getting.src=image_source;


            let para_getting = document.getElementById("para_1");
            para_getting.innerHTML= captureDesc

            openpopup();
      }

     image_creation.onclick=()=>
     {
    
        showdetails()
     }


    }
}

document.querySelector("#selectoption").addEventListener("change",()=>
{

    let selecte=document.getElementById("selectoption").value;
    console.log(selecte)
    switch(selecte)
    {
        case 'Name_Asscending':
            ascending(arr);
            break;
        case 'Name_Descinding':
                descending(arr);
                break;

        default:
            ascending(arr);
            break;
        // case 'Population_Asscending':
        //             ascending_populaton(arr);
        //             break;
        // case 'Population_Descending':
        //             decending_population(arr);
        //             break;
    }
});
        // console.log(arr)


        // let king=document.getElementById("search").value;
        // let sub=document.getElementById("submit");
        // king.addEventListener("click",(event)=>{
        //     event.preventDefault();
        //     let dharun=arr.filter((input)=>{
        //         if(input.toLowercase().includes(king.toLowercase()))
        //         console.log(input)
        //         return input
        //     });
        //     console.log(dharun);
            
        // });



        



    
