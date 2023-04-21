const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// const arrow 
const arrowLeft = document.getElementsByClassName('arrow_left')[0];
const arrowRight = document.querySelector(".arrow_right");

const textPhoto = document.querySelector(".text_photo");
const dots = document.querySelectorAll('.dot');
let indexSlider = 0;
/* const arrowRight= document.querySelector(#arrowRight) */


/* fonctionnement des flèches */
arrowLeft.addEventListener("click", () => {
	console.log( "fleche gauche")
	updateIndex(-1)
	display(indexSlider)
});

arrowRight.addEventListener("click", () => {
	console.log( "fleche right")
	updateIndex(1)
	
	display(indexSlider)

});

/* test dots */
/*
slides.forEach(function (dotIndex, index) {
	console.log(index);
		dots.addEventListener("click", () => {
			console.log("point")
			index=dotIndex
			dots.classList.add("dot_selected");
			updateIndex(1)
	display(indexSlider)
		});
});
*/

function updateIndex (sens) {
	
	indexSlider = indexSlider + sens
	const max = slides.length;
	if (indexSlider < 0) {
		indexSlider= max -1
	}
	if (indexSlider > max -1) {
		indexSlider= 0
	}	
}

/* display images du carrousel */
function display (currentIndexSlider) {
	const slideHtml = document.getElementsByClassName('banner-img')[0]

	slideHtml.src=`./assets/images/slideshow/${slides[currentIndexSlider].image}` 
	textPhoto.innerHTML = slides[currentIndexSlider].tagLine;



/* re test dots */
	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
	
		  dot.classList.add('dot_selected');
	  
		  // pour que indexSlider soit avec le dot selected
		  indexSlider = index;

		  display(indexSlider);
		});
	  });

	// dot.classList.remove('dot_selected');

}