let currentIndex = 0;

const images = document.querySelectorAll('.gallery-item');

function openLightbox(index){
    document.getElementById('lightbox').style.display = 'block';
    currentIndex = index;
    showImage();
}

function closeLightbox(){
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction){
    currentIndex += direction;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    showImage();
}

function showImage(){
    document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function filterImages(category){
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        if(category === 'all'){
            item.style.display = 'block';
        }
        else if(item.classList.contains(category)){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}