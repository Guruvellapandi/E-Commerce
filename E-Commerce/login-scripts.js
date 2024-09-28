// static/login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const messageDiv = document.getElementById('message');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    const predefinedUsername = 'testuser';
    const predefinedPassword = 'password';

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Clear previous error messages
        usernameError.textContent = '';
        passwordError.textContent = '';
        messageDiv.textContent = '';

        // Get form values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Client-side validation
        let valid = true;

        if (username.trim() === '') {
            usernameError.textContent = 'Username is required.';
            valid = false;
        }

        if (password.trim() === '') {
            passwordError.textContent = 'Password is required.';
            valid = false;
        }

        if (!valid) {
            return;
        }

        // Verification against predefined values
        if (username === predefinedUsername && password === predefinedPassword) {
            messageDiv.innerHTML = `<p style="color: green;">Login successful!</p>`;
            setTimeout(() => {
                window.location.href = '/dashboard'; // Simulate successful login redirect
            }, 1000);
        } else {
            messageDiv.innerHTML = `<p style="color: red;">Login Unsuccessful. Please check username and password.</p>`;
        }
    });
});
