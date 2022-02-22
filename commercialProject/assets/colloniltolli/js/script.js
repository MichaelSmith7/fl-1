let burger = document.querySelector(".burger");
let burgerMenu =  document.querySelector(".menu");


burger.addEventListener('click', () => {
    burger.classList.toggle("active-burger");

    if(burger.classList.contains("active-burger")){
        burgerMenu.style.left = "0"
    }
    else{
        burgerMenu.style.left = "-42vw"
    }
})

const IMAGES = document.querySelectorAll(".product-img")
let mainImage = document.querySelector('.product-image-main')
let image;

for (let IMAGE of IMAGES){
	IMAGE.addEventListener('click', () => {
        img = IMAGE.getAttribute('src');
        mainImage.style.backgroundImage = "url('" + img + "')" ;
    })
}


const SLIDES = document.querySelectorAll('.carusel-img')

for (const SLIDE of SLIDES){
	SLIDE.addEventListener('click', () => {
  	clearActiveClasses()
  	SLIDE.classList.add('active-img')
  })
}
function	clearActiveClasses() {
	SLIDES.forEach((SLIDE) => {
  	SLIDE.classList.remove('active-img')
  })
}

$(".slider-plan").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true
});
$(".slide-home").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});