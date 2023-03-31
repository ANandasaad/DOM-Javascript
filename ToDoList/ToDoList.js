const InputItems=document.getElementById("inputItems");
const AddButton=document.getElementById("Addbtn");
const List=document.getElementById("List");


const ls=localStorage.getItem('todo');
const todos=ls?JSON.parse(ls):[];
AddButton.addEventListener("click",function(e){
    e.preventDefault();
  let   data=InputItems.value;
   todos.push(data);
   localStorage.setItem('todo',JSON.stringify(todos));
   location.reload();
})
todos.map((data,index)=>{

    List.innerHTML+=`<tr>
    <td>${data}</td>
    <td onclick="del(${index})">Delete</td>
    </tr> <br>`

   
})

function del(e)
{
    let deleted =todos.filter((data,index)=>{
        return index!==e;
    })
    localStorage.setItem('todo',JSON.stringify(deleted));
    location.reload();
}