var navLinks= document.getElementById("navLinks");

function showmenu(){
    navLinks.style.right="0";
}   
function hidemenu(){
    navLinks.style.right="-200px";
}


//blog section//
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".image-container img");
  let index = 0;

  function changeImage() {
    images[index].style.display = "none";
    index = (index + 1) % images.length;
    images[index].style.display = "block";
  }

  setInterval(changeImage, 3000); // Change image every 3 seconds
});


//gallery

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".image img");
  const galleryContainer = document.querySelector(".gallery-container");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  
  images.forEach(image => {
    image.addEventListener("click", function() {
      const imgSrc = this.getAttribute("src");
      const overlayImg = document.createElement("img");
      overlayImg.setAttribute("src", imgSrc);
      overlay.appendChild(overlayImg);
      document.body.appendChild(overlay);
      
      overlay.addEventListener("click", function() {
        overlay.remove();
      });
    });
  });
});
