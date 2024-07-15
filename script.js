document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    document.getElementById('toggleMenu').addEventListener('click', function () {
        document.getElementById('mobileMenu').classList.remove('hidden');
    });

    document.getElementById('closeMenu').addEventListener('click', function () {
        document.getElementById('mobileMenu').classList.add('hidden');
    });

    // Try Demo Popup
    const tryDemoBtnDesktop = document.getElementById('tryDemoBtnDesktop');
    const tryDemoBtnMobile = document.getElementById('tryDemoBtnMobile');
    const tryDemoPopup = document.getElementById('tryDemoPopup');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const cancelBtn = document.getElementById('cancelBtn');

    const openPopup = () => {
        tryDemoPopup.classList.remove('hidden');
    };

    const closePopup = () => {
        tryDemoPopup.classList.add('hidden');
    };

    tryDemoBtnDesktop.addEventListener('click', openPopup);
    tryDemoBtnMobile.addEventListener('click', openPopup);
    closePopupBtn.addEventListener('click', closePopup);
    cancelBtn.addEventListener('click', closePopup);

    tryDemoPopup.addEventListener('click', function (event) {
        if (event.target === tryDemoPopup) {
            closePopup();
        }
    });

    // Set active link color
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('text-secondary');
        }
    });

});


document.addEventListener('DOMContentLoaded', function () {
    // Select all FAQ items
    const faqItems = document.querySelectorAll('.faq-item');

    // Iterate over each FAQ item
    faqItems.forEach(item => {
        // Select the arrow elements within each FAQ item
        const arrowUp = item.querySelector('.arrow-up');
        const arrowDown = item.querySelector('.arrow-down');

        // Add initial state for down arrow
        arrowUp.classList.add('hidden');
        arrowDown.classList.remove('hidden');

        // Add a click event listener to each FAQ question
        item.querySelector('.faq-question').addEventListener('click', function () {
            // Check if the current FAQ item is open
            const isOpen = item.classList.contains('open');

            // Close all FAQ items and reset their states
            faqItems.forEach(faq => {
                faq.classList.remove('open');
                faq.querySelector('.faq-answer').classList.add('hidden');
                faq.querySelector('.arrow-up').classList.add('hidden');
                faq.querySelector('.arrow-down').classList.remove('hidden');
                faq.querySelector('.arrow').classList.remove('bg-black-200');
                faq.querySelector('.arrow').classList.add('bg-gray-200');
            });

            // If the clicked FAQ item is not open, open it
            if (!isOpen) {
                item.classList.add('open');
                item.querySelector('.faq-answer').classList.remove('hidden');
                arrowUp.classList.remove('hidden');
                arrowDown.classList.add('hidden');
                item.querySelector('.arrow').classList.remove('bg-gray-200');
                item.querySelector('.arrow').classList.add('bg-black-200');
            }
        });
    });
});