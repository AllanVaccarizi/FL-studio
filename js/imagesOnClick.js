let mediaImages = document.querySelectorAll("#mainContent img")

for(let i = 0 ; i < mediaImages.length ; i++){
    let image = mediaImages[i]
    image.addEventListener("click", showSinglePict, false);
}

function showSinglePict(ev){
    let image = ev.target
    let imageContainer = document.getElementById("mediaContainer")
    let bigImage = imageContainer.querySelector('img')
    bigImage.src = image.src
    imageContainer.classList.toggle("visible")
    imageContainer.addEventListener("click", closeSinglePict, false)
}

function closeSinglePict(){
    let imageContainer = document.getElementById("mediaContainer")
    imageContainer.classList.toggle("visible")
}
