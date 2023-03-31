const para=document.getElementById('para');
let count=0;
function increase()
{
  
    let count=Number( window.localStorage.getItem("count"))
   count+=1;
    window.localStorage.setItem("count",count);

  para.textContent=count;
}

function decrease()
{
   let count=Number(window.localStorage.getItem("count"));
   count-=1;
   window.localStorage.setItem("count",count);
   para.textContent=count;
}

