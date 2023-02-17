// Basically I just stored the images into classes then used
// an index 'currentImgId' for each artist to cycle through the classes.
// As I mentioned, I know there are more efficent ways to do this,
// but I think this was enough for this assignment. 

var artistCard1 = document.getElementById("artist-1");
var artistCard2 = document.getElementById("artist-2");
var artistCard3 = document.getElementById("artist-3");
var artistCard4 = document.getElementById("artist-4");
var currentImgId1 = 0;
var currentImgId2 = 0;
var currentImgId3 = 0;
var currentImgId4 = 0;



artistCard1.addEventListener('click', function NextArt() {
    if(currentImgId1 == 0) {
        currentImgId1 = 1;
        artistCard1.classList.remove("artist1-image1");
        artistCard1.classList.add("artist1-image2");
    }else if(currentImgId1 == 1) {
        currentImgId1 = 2;
        artistCard1.classList.remove("artist1-image2");
        artistCard1.classList.add("artist1-image3");
    }else if(currentImgId1 == 2) {
        currentImgId1 = 0;
        artistCard1.classList.remove("artist1-image3");
        artistCard1.classList.add("artist1-image1");
    }
});


artistCard2.addEventListener('click', function NextArt() {
    if(currentImgId2 == 0) {
        currentImgId2 = 1;
        artistCard2.classList.remove("artist2-image1");
        artistCard2.classList.add("artist2-image2");
    }else if(currentImgId2 == 1) {
        currentImgId2 = 2;
        artistCard2.classList.remove("artist2-image2");
        artistCard2.classList.add("artist2-image3");
    }else if(currentImgId2 == 2) {
        currentImgId2 = 0;
        artistCard2.classList.remove("artist2-image3");
        artistCard2.classList.add("artist2-image1");
    }
});

artistCard3.addEventListener('click', function NextArt() {
    if(currentImgId3 == 0) {
        currentImgId3 = 1;
        artistCard3.classList.remove("artist3-image1");
        artistCard3.classList.add("artist3-image2");
    }else if(currentImgId3 == 1) {
        currentImgId3 = 2;
        artistCard3.classList.remove("artist3-image2");
        artistCard3.classList.add("artist3-image3");
    }else if(currentImgId3 == 2) {
        currentImgId3 = 0;
        artistCard3.classList.remove("artist3-image3");
        artistCard3.classList.add("artist3-image1");
    }
});

artistCard4.addEventListener('click', function NextArt() {
    if(currentImgId4 == 0) {
        currentImgId4 = 1;
        artistCard4.classList.remove("artist4-image1");
        artistCard4.classList.add("artist4-image2");
    }else if(currentImgId4 == 1) {
        currentImgId4 = 2;
        artistCard4.classList.remove("artist4-image2");
        artistCard4.classList.add("artist4-image3");
    }else if(currentImgId4 == 2) {
        currentImgId4 = 0;
        artistCard4.classList.remove("artist4-image3");
        artistCard4.classList.add("artist4-image1");
    }
});