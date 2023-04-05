const container=document.querySelectorAll('#container');
const options={
    root:null,
    threshold:0,
    maxMargin:"-150px"
}
const observer= new IntersectionObserver((entries,observer)=>{
     entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
       console.log(entry.target);
       entry.target.classList.toggle('inversion');
       observer.unobserve(entry.target);
     })
     
},options)
container.forEach((entry)=>{
    observer.observe(entry);
})
