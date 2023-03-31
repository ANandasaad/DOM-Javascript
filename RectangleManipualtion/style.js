const colorBtn=document.querySelector(".colorBtn")
const addBtn=document.querySelector(".addChildBtn");
const removeBtn=document.querySelector(".removeChildBtn");
const container=document.querySelector(".container");

colorBtn.addEventListener("click",function(){
   container.classList.toggle("color");
})
const fragment= new DocumentFragment();
addBtn.addEventListener("click",function(){
    const newDiv= document.createElement('div');
    
    newDiv.textContent="NewDIv";
    newDiv.style.border="1px solid black";
    newDiv.style.height="auto";
    newDiv.style.width="auto";
    fragment.appendChild(newDiv);
   container.appendChild(fragment);
     
})
removeBtn.addEventListener("click",function(){
    container.removeChild(container.lastChild);
})