document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let firstName = document.getElementById('first-name').value.trim();
    let lastName = document.getElementById('last-name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    if (firstName === "" || lastName === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Sign-in successful!");
    }
});
