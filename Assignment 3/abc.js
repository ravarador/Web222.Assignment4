const nemos = [
    "imgs/img1.jpg",
    "imgs/img2.jpg",
    "imgs/img3.jpg",
    "imgs/img4.jpg"
]

addEventListener('DOMContentLoaded', function() {
    let nemo = document.querySelector('#nemo');

    nemo.onload = function() {
    };
    let currentNemoImageIndex = 0;

    // Get back a URL from the hounds array
    function nextNemoImageUrl() {
        currentNemoImageIndex++;

        if(currentNemoImageIndex === nemos.length - 1) {
            currentNemoImageIndex = 0;
        }

        return nemos[currentNemoImageIndex];
    }

    setInterval(function() {
        console.log('interval complete, running function...');
        nemo.src = nextNemoImageUrl();
    }, 2 * 1000); 

})