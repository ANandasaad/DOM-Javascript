const ViewBtn=document.querySelector('#btn');

ViewBtn.addEventListener("click",function(){
    const gallery=document.querySelector('.gallery');
    if(gallery.style.display==="none")
    {
       gallery.style.display="block";
    }
    else{
        gallery.style.display="none";
    }
})