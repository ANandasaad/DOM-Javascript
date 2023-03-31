const SearchInput=document.getElementById("search-bar");
const Btn=document.getElementById("btnSearch");
const MovieContainer=document.querySelector(".Movie-list");

let query;

Btn.addEventListener("click",function(){
 query=SearchInput.value;
   getApi();
   SearchInput.value="";
    
})
const Movie={};
async function getApi()
{
    const response=await fetch("http://www.omdbapi.com/?t="+query+"&apikey=173b7906");
  
    const data = await response.json();
    console.log(data);
   Movie.Title=data.Title;
   Movie.Actors=data.Actors;
   Movie.Poster=data.Poster;
   Movie.Released=data.Released;
   Movie.imdbRating=data.imdbRating;
   console.log(Movie.imdbRating);
   MovieDetails();
}

function MovieDetails()
{
   const Fragment=new DocumentFragment();
   const newImg=document.createElement('img');
   const newTitle=document.createElement("h4");
   const newReleased=document.createElement("p");
   const newImd=document.createElement("p");
   const newCrew=document.createElement("p");
   newImg.src=Movie.Poster;
   newTitle.textContent=Movie.Title;
   newReleased.textContent=Movie.Released;
   newImd.textContent=Movie.imdbRating;
   newCrew.textContent=Movie.Actors;
   Fragment.appendChild(newImg);
   Fragment.appendChild(newTitle);
   Fragment.appendChild(newReleased);
   Fragment.appendChild(newImd);
   Fragment.appendChild(newCrew);
   MovieContainer.append(Fragment);

   




}


