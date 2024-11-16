






// Function to toggle box expansion


function toggleBox(boxId) {
    const box = document.getElementById(boxId);
    box.classList.toggle('open');


}

// Add event listeners to each box



document.getElementById('box1').addEventListener('click', function () {
    toggleBox('box1');
});
document.getElementById('box2').addEventListener('click', function () {
    toggleBox('box2');
});
document.getElementById('box3').addEventListener('click', function () {
    toggleBox('box3');
});
// Select all div elements with the "radio-div" class

const divs = document.querySelectorAll('.radio-div');

// Add a click event listener to each div

divs.forEach(div => {
    div.addEventListener('click', function () {
        // Remove the "selected" class from all divs
        divs.forEach(d => d.classList.remove('selected'));

        // Add the "selected" class to the clicked div

        this.classList.add('selected');
        // Select the radio button inside the clicked div

    });
});





