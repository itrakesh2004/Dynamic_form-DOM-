const lableInputfild = document.querySelector("#lablevalue");
const formInputfild = document.querySelector("#form");
const Inputtype = document.querySelector("#inputType");

lableInputfild.addEventListener('keyup',(event)=>{
   const keyPressed =event.key;
   
   if(keyPressed==="Enter"){
    const type = inputType.value;
    const label = lableInputfild.value;

    const lableInput= document.createElement("label");
    const div =document.createElement("div");
    const input =document.createElement("input")

    lableInput.innerHTML = label;
    input.type= type;
     input.classList.add("from-control")
     input.style.width="1070px";
     lableInput.style.padding="4px";
    div.classList.add("mb-3")
    
   if(type != 'submit'){
    div.appendChild(lableInput)
   }
   if(type=='submit'){
    input.classList.add('btn')
    input.classList.add('btn-succes')
    input.value=label
   }
    div.appendChild(input);

    form.appendChild(div);

    console.log(type,label)
   }
})