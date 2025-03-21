document.addEventListener("DOMContentLoaded", function() {
    let templateModal = document.getElementById("template-modal");
    let templateBtn = document.getElementById("template-btn");
    let closeModal = document.querySelector(".close-btn");

    templateBtn.addEventListener("click", function() {
        templateModal.style.display = "block";
    });

    closeModal.addEventListener("click", function() {
        templateModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === templateModal) {
            templateModal.style.display = "none";
        }
    });

    
});


