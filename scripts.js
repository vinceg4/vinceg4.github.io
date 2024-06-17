document.addEventListener('DOMContentLoaded', function() {
    const editable = document.querySelector('.editable');

    editable.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent propagation to parent elements

        // Select the text inside the editable span for easy editing
        selectText(editable);
    });

    // Function to select text inside an element
    function selectText(element) {
        if (document.body.createTextRange) {
            const range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if (window.getSelection) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle circle click
    const handleCircleClick = (message) => {
        modalMessage.textContent = message;
        modal.style.display = "block";
    };

    // Get the modal and modal message element
    const modal = document.getElementById("myModal");
    const modalMessage = document.getElementById("modal-message");

    // Get each circle element by ID
    const circleOne = document.querySelector('.circle.one');
    const circleTwo = document.querySelector('.circle.two');
    const circleThree = document.querySelector('.circle.three');
    const circleFour = document.querySelector('.circle.four');
    const circleFive = document.querySelector('.circle.five');
    const circleSix = document.querySelector('.circle.six');
    const circleSeven = document.querySelector('.circle.seven');
    const circleEight = document.querySelector('.circle.eight');
    const circleNine = document.querySelector('.circle.nine');

    // Add click event listener to each circle
    circleOne.addEventListener('click', () => {
        handleCircleClick("Loyalty To Country");
    });

    circleTwo.addEventListener('click', () => {
        handleCircleClick("Leadership");
    });

    circleThree.addEventListener('click', () => {
        handleCircleClick("Discipline");
    });

    circleFour.addEventListener('click', () => {
        handleCircleClick("Professionalism");
    });

    circleFive.addEventListener('click', () => {
        handleCircleClick("Fighting Spirit");
    });

    circleSix.addEventListener('click', () => {
        handleCircleClick("Ethics");
    });

    circleSeven.addEventListener('click', () => {
        handleCircleClick("Care for Soldiers");
    });

    circleEight.addEventListener('click', () => {
        handleCircleClick("Safety");
    });

    circleNine.addEventListener('click', () => {
        handleCircleClick("Team Excellence");
    });

    // Close the modal when close button or outside modal is clicked
    const closeModal = () => {
        modal.style.display = "none";
    };

    // Close modal when close button or outside modal is clicked
    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.classList.contains('close')) {
            closeModal();
        }
    });

    // Close modal on 'Escape' key press
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Event listener for .editable element
    const editable = document.querySelector('.editable');
    if (editable) {
        editable.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent propagation to parent elements
            selectText(editable); // Function to select text inside the editable span
        });
    }
});

// Function to update circle color based on dropdown value
const dropdowns = document.querySelectorAll('#dropdowns select');

// Loop through dropdowns and add event listeners
for (let dropdown of dropdowns) {
    dropdown.addEventListener('change', function() {
        const selectedColor = this.value;
        const circleClassName = this.id.replace('dropdown-', ''); // Extract circle class name
        updateCircleColor(circleClassName, selectedColor);
    });
}

// Function to update circle color based on dropdown value
function updateCircleColor(circleClassName, color) {
    const circles = document.getElementsByClassName(circleClassName);
    for (let circle of circles) {
        circle.style.backgroundColor = color;
    }
}