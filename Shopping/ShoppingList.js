const inputItem=document.getElementById("item-name-input");
const inputPrice=document.getElementById("item-price-input");
const AddBtn=document.getElementById("btn");
const GrandItem=document.getElementById("total-grand");
const ItemList=document.getElementById("Item-list");


AddBtn.addEventListener("click",addItems);

function addItems()
{
    const Item=inputItem.value;
    const ItemPrice=parseFloat(inputPrice.value);
    if(Item===" " || isNaN(ItemPrice) || ItemPrice<0)
    {
        alert("Invalid Input Bitch!!");
        return;
    }

    // Create row and 

    const newrow=document.createElement("tr");
    const newItemname=document.createElement("td");
    const newItemPrice=document.createElement("td");

    newItemname.innerText=Item;
    newItemPrice.innerText=ItemPrice;
    newrow.appendChild(newItemname);
    newrow.appendChild(newItemPrice);

    ItemList.insertBefore(newrow,ItemList.firstChild);
    const Prices=parseInt(GrandItem.textContent);
    GrandItem.textContent=Prices+ItemPrice;

    inputItem.value="";
    inputPrice.value="";
}