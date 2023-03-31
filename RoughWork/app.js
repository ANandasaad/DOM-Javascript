const Demo=document.getElementById("demo");
console.log(Demo.nodeType);

/// use nodes
const para=document.createElement("p");
const node=document.createTextNode("Hello DOM! ");
para.appendChild(node);

document.body.appendChild(para);


const para1=document.createElement("p");
para1.innerText="Hello DOM@";
document.body.appendChild(para1);

const para2=document.createElement("p");
const node1=document.createTextNode("Heloo");
para2.appendChild(node1);

document.body.insertBefore(para2,document.getElementById("h1"));


// const dm=document.getElementById("dm");
// document.body.removeChild(dm);

const nodeList =document.getElementsByTagName("h1");

for(let i=0;i<nodeList.length;i++)
{
    nodeList[i].style.color="red";
    
}
console.log(document.querySelectorAll('p'));
console.log(document.getElementsByTagName('p'));

console.log(document.body.childNodes);
console.log(document.body.children);
console.log(document.body.firstElementChild);

const nd=document.getElementById("node");
const nodename=document.body.childNodes;
let text="";
// for(let i=0;i<nodename.length;i++)
// {
//    text+=nodename[i].nodeName+"<br>";
// }
// nd.innerHTML=text;

nodename.forEach((e) => {
    console.log(e.nodeName);
   text+=e.nodeName+"<br>"
    
});
nd.innerHTML=text;

