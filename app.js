document.addEventListener('DOMContentLoaded', () => {

    /* ===== Sticky Navbar ===== */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ===== Mobile Menu ===== */
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    /* ===== Countdown Timer ===== */
    // Set the date we're counting down to
    const countDownDate = new Date("Sep 24, 2026 15:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(function () {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

        // If the count down is finished
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "<h2>The celebration has begun!</h2>";
        }
    }, 1000);

    /* ===== RSVP Form Validation ===== */
    const rsvpForm = document.getElementById('rsvpForm');
    const successMessage = document.getElementById('successMessage');

    rsvpForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        // Validate Name
        const name = document.getElementById('fullName');
        if (name.value.trim() === '') {
            name.parentElement.classList.add('error');
            isValid = false;
        } else {
            name.parentElement.classList.remove('error');
        }

        // Validate Email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.parentElement.classList.add('error');
            isValid = false;
        } else {
            email.parentElement.classList.remove('error');
        }

        // Validate Guests
        const guests = document.getElementById('guestCount');
        if (guests.value === '') {
            guests.parentElement.classList.add('error');
            isValid = false;
        } else {
            guests.parentElement.classList.remove('error');
        }

        // Validate Attendance
        const attendanceArgs = document.querySelectorAll('input[name="attendance"]:checked');
        const attendanceGroup = document.querySelector('.attendance-group');
        if (attendanceArgs.length === 0) {
            attendanceGroup.classList.add('error');
            isValid = false;
        } else {
            attendanceGroup.classList.remove('error');
        }

        // If form is valid, show success message
        if (isValid) {
            // Here you would typically send data to a backend

            // Hide form and show success
            rsvpForm.style.display = 'none';
            successMessage.classList.remove('hidden');
        }
    });

    // Remove error class on input
    const inputs = rsvpForm.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.type === 'radio') {
                document.querySelector('.attendance-group').classList.remove('error');
            } else {
                input.parentElement.classList.remove('error');
            }
        });
        input.addEventListener('change', () => {
            input.parentElement.classList.remove('error');
        });
    });

    /* ===== Lightbox Gallery ===== */
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeLightbox = document.querySelector(".close-lightbox");
    const galleryItems = document.querySelectorAll(".gallery-item img");

    galleryItems.forEach(img => {
        img.parentNode.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            document.body.style.overflow = 'hidden';
        });
    });

    closeLightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
        document.body.style.overflow = 'auto';
    });

    // Close on background click
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    });
});
