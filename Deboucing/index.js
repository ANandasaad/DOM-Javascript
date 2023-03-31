const inputData=document.getElementById("input-data");
let count=0;

function myFunction()
{
    console.log("Api call ......." +count++);
}

function debounce(fun,delay)
{
    let timeOutId;
    return function(...args)
    {
        clearTimeout(timeOutId);
        timeOutId=setTimeout(function(){
         fun.apply(this,args);
        },delay);
    }
}


const getApi=debounce(myFunction,500);
inputData.addEventListener("keyup",getApi);

