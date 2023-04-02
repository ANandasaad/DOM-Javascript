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

window.scrollBy(0,10);

window.addEventListener('scroll', function() {
    // document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
    console.log(this.window.scrollY);
  });