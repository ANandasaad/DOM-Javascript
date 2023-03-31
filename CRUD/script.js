const carForm=document.getElementById("carFrom");
const carBrand=document.getElementById("carBrand");
const carPrice=document.getElementById("carPrice");
const Key=document.getElementById("key");
const retrieveKey=document.getElementById("retrieveKey");
const retrieveButton=document.getElementById("retrieveButton");
const removeKey=document.getElementById("removeKey");
const removeButton=document.getElementById("removeButton");
const clearButton=document.getElementById("clearButton");
const retrieve=document.getElementById("retrieve");
function store()
{
    let brand=carBrand.value;
    let price=carPrice.value;
    let key=Key.value;

    const car={
        brand:brand,
        price:price,
    }

    window.localStorage.setItem(key,JSON.stringify(car));
}

function retrieveRecords()
{
   let key=retrieveKey.value;
   console.log(key);
   let records=window.localStorage.getItem(key);
   
   const newPara=document.createElement('p');
   const info=document.createTextNode(records);
   newPara.appendChild(info);
   retrieve.appendChild(newPara);
}
function removeItem()
{
    let key=removeKey.value;
    let removeitem=window.localStorage.removeItem(key);
    console.log(removeitem);
}

function clearStorage()
{
    window.localStorage.clear();
    console.log("clear records");
}




window.onload=function()
{
    carForm.onsubmit=store;
    clearButton.onclick=clearStorage;
    removeButton.onclick=removeItem;
    retrieveButton.onclick=retrieveRecords;
}