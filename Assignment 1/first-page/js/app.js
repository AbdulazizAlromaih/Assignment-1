
document.addEventListener("DOMContentLoaded", function(){
     console.log("Page loaded...")
     let v = document.getElementById('top');
     v.addEventListener('click',scrollTopPage)
});


const scrollTopPage = () =>{

  window.scrollTo(0,0);

}




