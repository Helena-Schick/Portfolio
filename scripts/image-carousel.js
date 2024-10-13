var homePageMockup 
var reviewPageMockup
var reviewsPageMockup
var reviewPageWireframe
var homePageWireframe
var reviewsPageWireframe

var imageNumber1
var imageNumber2
var images1
var images2
var selected1 = 0;
var selected2 = 0;

var time;
var startTime;

const fadeInTime = 0.5;

document.addEventListener("DOMContentLoaded", function() {
    homePageMockup = document.getElementById("home-mockup-image");
    reviewPageMockup = document.getElementById("review-mockup-image");
    reviewsPageMockup = document.getElementById("reviews-mockup-image");
    homePageWireframe = document.getElementById("home-wireframe-image");
    reviewPageWireframe = document.getElementById("review-wireframe-image");
    reviewsPageWireframe = document.getElementById("reviews-wireframe-image");
    imageNumber1 = document.getElementById("image-number");
    imageNumber2 = document.getElementById("image-number-2");
    
    images1 = [homePageMockup,reviewPageMockup,reviewsPageMockup];
    images2 = [homePageWireframe, reviewPageWireframe, reviewsPageWireframe];

    document.getElementById("button-right").onclick = carouselOneRight;
    document.getElementById("button-left").onclick = carouselOneLeft;
    document.getElementById("button-right-2").onclick = carouselTwoRight;
    document.getElementById("button-left-2").onclick = carouselTwoLeft;
    
    carouselOne();
    carouselTwo();
});

function carouselOneLeft() {
    selected1 -= 1;
    if (selected1<0){
        selected1 = images1.length-1;
    }
    carouselOne();
}

function carouselTwoLeft() {
    selected2 -= 1;
    if (selected2<0){
        selected2 = images1.length-1;
    }
    carouselTwo();
}

function carouselOneRight() {
    selected1 += 1;
    if (selected1 == images1.length){
        selected1 = 0;
    }
    carouselOne();
}

function carouselTwoRight() {
    selected2 += 1;
    if (selected2 == images2.length){
        selected2 = 0;
    }
    carouselTwo();
}

function carouselOne(){
    //changes the image being displayed
    imageNumber1.innerHTML = (selected1+1).toString() + "/3"    
    for (var image = 0; image <images1.length; image++){
        images1[image].style.display = "none";
    }
    images1[selected1].style.display = "block";
    images1[selected1].style.opacity = "0";
    startTime = new Date();

    //makes the image fade in
    function fadeIn(){ 
        time = (new Date() - startTime) / 1000;
        images1[selected1].style.opacity = (time / fadeInTime).toString();
        if (time < fadeInTime){
            requestAnimationFrame(fadeIn);
        } else {
            images1[selected1].style.opacity = "1";
        }
    };
    fadeIn()
}

function carouselTwo(){
    //changes the image being displayed
    imageNumber2.innerHTML = (selected2+1).toString() + "/3"
    for (var image = 0; image <images2.length; image++){
        images2[image].style.display = "none";
    }
    images2[selected2].style.display = "block";
    images2[selected2].style.opacity = "0";
    startTime = new Date();

    //makes the image fade in
    function fadeIn(){
        time = (new Date() - startTime) / 1000;
        images2[selected2].style.opacity = (time / fadeInTime).toString();
        if (time < fadeInTime){
            requestAnimationFrame(fadeIn);
        } else {
            images2[selected2].style.opacity = "1";
        }
    };
    fadeIn()
}
