// script.js

// Responsive Navbar
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const navbarLinks = navbar.getElementsByTagName('a');

    for (let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].addEventListener('click', function () {
            if (navbar.classList.contains('responsive')) {
                navbar.classList.remove('responsive');
            }
        });
    }

    document.getElementById('navbar-toggle').addEventListener('click', function () {
        navbar.classList.toggle('responsive');
    });
});

// Add JavaScript for handling the hover effect on project images
document.addEventListener('DOMContentLoaded', function () {
    const projectImages = document.querySelectorAll('.project img');

    projectImages.forEach(function (image) {
        image.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
});

// Add JavaScript for handling the form submission and displaying the sent message
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const sentMessage = document.getElementById('sent-message');
    
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Simulate a successful message sent (you can replace this with your actual form submission logic)
        sentMessage.style.display = 'block';
        // Hide the message after 5 seconds
        setTimeout(function () {
            sentMessage.style.display = 'none';
        }, 5000);
    });
});
