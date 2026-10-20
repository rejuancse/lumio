/*
========================================================================
   BOOTSTRAP 5 ADMIN TEMPLATE - LUMIO ADMIN
   AUTHENTICATION MODULE JAVASCRIPT
   Developed with premium UI/UX standards

   Template Name: Lumio Admin
   Version: 1.0
   Author: Lumio Admin Team
   Email: hello.lumioadmin@gmail.com
   URL: https://lumioadmin.web.id
========================================================================
*/

// Robust init: works whether the module loads before or after DOMContentLoaded
function initAuth() {
    /**
     * Password Visibility Toggle Logic
     * Enables toggling password input between obscured dots and plain text.
     */
    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            // Toggle input type attribute
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Toggle eye icon class & aria-label
            const icon = this.querySelector('i');
            if (type === 'text') {
                if (icon) {
                    icon.classList.remove('bi-eye');
                    icon.classList.add('bi-eye-slash');
                }
                this.setAttribute('aria-label', 'Hide password');
            } else {
                if (icon) {
                    icon.classList.remove('bi-eye-slash');
                    icon.classList.add('bi-eye');
                }
                this.setAttribute('aria-label', 'Show password');
            }
        });
    }

    /**
     * Client-Side Form Validation Logic
     * Prevents submission if form inputs are invalid and applies Bootstrap validation styles.
     */
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            if (!loginForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            loginForm.classList.add('was-validated');
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
} else {
    initAuth();
}
