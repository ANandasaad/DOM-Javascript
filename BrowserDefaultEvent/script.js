

let thumbs=document.getElementById('thumbs');
let largeImg=document.getElementById("largeImg");
thumbs.addEventListener("click",function(e){
            let target=e.target.closest('a');
            if(!target) return false;

            showthumbnail(target.href,target.title);
            e.preventDefault();

    
})

function showthumbnail(href,title)
{
    largeImg.src=href;
    largeImg.title=title;
}