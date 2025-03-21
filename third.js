document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let firstName = document.getElementById('first-name').value.trim();
    let lastName = document.getElementById('last-name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirm-password').value.trim();

    if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } else {
        alert("Account successfully created!");
    }
});
