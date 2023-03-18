const images = ['images/blog-1.jpg', 'images/blog-2.jpg', 'images/blog-3.jpg'];
const sliderImg = document.getElementById('slider-img');
let imageIndex = 0;

const changeSlide = (index)=>{
    if(index === 1){
        imageIndex++;
    }else{
        imageIndex--;
    }
}
setInterval(() => {
    imageIndex++;
    if(imageIndex === images.length){
        imageIndex = 0;
    }
    sliderImg.setAttribute('src',images[imageIndex]);
}, 1000);