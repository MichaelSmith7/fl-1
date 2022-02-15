let burger = document.querySelector(".burger");
let burgerMenu =  document.querySelector(".menu");

console.log(burgerMenu)

burger.addEventListener('click', () => {
    burger.classList.toggle("active-burger");

    if(burger.classList.contains("active-burger")){
        burgerMenu.style.left = "0"
    }
    else{
        burgerMenu.style.left = "-42vw"
    }
})

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

$(".slide-home").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});