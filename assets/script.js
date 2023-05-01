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
/* const Text et dots */
const textPhoto = document.querySelector(".text_photo");
const dots = document.querySelectorAll('.dot');
let indexSlider = 0;

/* fonctionnement des flèches AVEC LES DOTS */
arrowLeft.addEventListener("click", () => {
	console.log( "fleche gauche")
	console.log( indexSlider)
	updateIndex(-1)
	display(indexSlider);
	checkSelectedDot(indexSlider);
});

arrowRight.addEventListener("click", () => {
	console.log( "fleche right")
	console.log( indexSlider)
	updateIndex(1)
	display(indexSlider);
	checkSelectedDot(indexSlider);
 	});

	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			console.log( "bullet point")
			console.log( indexSlider)
			indexSlider = index;
			display(indexSlider);
			checkSelectedDot(indexSlider);		  
		});	 
});

/* pour creer une boucle */
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
}
/* Pour enlever la classe dot_selected aux Dots */
function checkSelectedDot(indexSlider) {
	dots.forEach((dot, index) => {
		if (index === indexSlider) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}
display(indexSlider);