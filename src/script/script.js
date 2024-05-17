// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

/*On load animation*/
function reveal() {
	var reveals = document.querySelectorAll(".reveal");

	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 100;

		if (elementTop < windowHeight - elementVisible) {
		reveals[i].classList.add("active");
		} else {
		reveals[i].classList.remove("active");
		}
	}
	}

	window.addEventListener("load", reveal);

/*On scroll animation*/
function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("active");
    } else {
    reveals[i].classList.remove("active");
    }
}
}

// Add a class to visited anchor tags
function styleVisitedAnchorTags() {
const anchorTags = document.querySelectorAll('a');

anchorTags.forEach((anchorTag) => {
    if (anchorTag.href && anchorTag.href !== '') {
    const isVisited = localStorage.getItem(anchorTag.href);
    if (isVisited) {
        anchorTag.classList.add('visited');
    }
    }
});
}

// Example usage:
styleVisitedAnchorTags();


    // Get the necessary elements
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-button-prev');
    const nextButton = document.querySelector('.carousel-button-next');
    
    // Calculate the width of a single item
    const carouselItemWidth = carouselContainer.querySelector('.carousel-item').offsetWidth;
    
    // Set the initial position of the carousel
    let currentPosition = 0;
    
    // Function to move the carousel to the specified position
    const moveCarousel = (position) => {
    carouselContainer.style.transform = `translateX(${position}px)`;
    };
    
    // Function to handle the previous button click
    const prevButtonClick = () => {
    currentPosition += carouselItemWidth;
    if (currentPosition > 0) {
        currentPosition = -(carouselItemWidth * (carouselContainer.childElementCount - 3));
    }
    moveCarousel(currentPosition);
    };
    
    // Function to handle the next button click
    const nextButtonClick = () => {
    currentPosition -= carouselItemWidth;
    if (currentPosition < -(carouselItemWidth * (carouselContainer.childElementCount - 3))) {
        currentPosition = 0;
    }
    moveCarousel(currentPosition);
    };
    
    
    // Add event listeners to the buttons
    prevButton.addEventListener('click', prevButtonClick);
    nextButton.addEventListener('click', nextButtonClick);