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
            link.classList.add('text-[#2C56FE]');
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
                faq.querySelector('.arrow').classList.remove('bg-[#222222]');
                faq.querySelector('.arrow').classList.add('bg-[#DDDDDD]');
            });

            // If the clicked FAQ item is not open, open it
            if (!isOpen) {
                item.classList.add('open');
                item.querySelector('.faq-answer').classList.remove('hidden');
                arrowUp.classList.remove('hidden');
                arrowDown.classList.add('hidden');
                item.querySelector('.arrow').classList.remove('bg-[#DDDDDD]');
                item.querySelector('.arrow').classList.add('bg-[#222222]');
            }
        });
    });
});



// Review / Submit Popup
document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById('reviewsubmitPopup');
    const popupContent = document.getElementById('reviewsubmitpopupContent');
    const getStartedBtn = document.getElementById('leaveReviewBtn');
    const closeBtn = document.getElementById('reviewsubmitcloseBtn');

    function openPopup() {
        popup.classList.remove('hidden');
    }

    function closePopup(event) {
        if (event.target === popup || event.target === closeBtn) {
            popup.classList.add('hidden');
        }
    }

    getStartedBtn.addEventListener('click', openPopup);
    popup.addEventListener('click', closePopup);
    closeBtn.addEventListener('click', closePopup);
});

// Video Popup
document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById('videoPopup');
    const popupContent = document.getElementById('videopopupContent');
    const getStartedBtn = document.getElementById('videoBtn');
    const closeBtn = document.getElementById('videocloseBtn');

    function openPopup() {
        popup.classList.remove('hidden');
    }

    function closePopup(event) {
        if (event.target === popup || event.target === closeBtn) {
            popup.classList.add('hidden');
        }
    }

    getStartedBtn.addEventListener('click', openPopup);
    popup.addEventListener('click', closePopup);
    closeBtn.addEventListener('click', closePopup);
});




// Load More Reviews 
document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.getElementById('reviews-container');
    const reviews = Array.from(reviewsContainer.getElementsByClassName('review'));
    const loadMoreBtn = document.getElementById('load-more-btn');

    const initialReviewsCount = 5;
    let showAll = false;

    function updateReviewsDisplay() {
        reviews.forEach((review, index) => {
            if (showAll) {
                review.classList.remove('hidden');
            } else {
                if (index < initialReviewsCount) {
                    review.classList.remove('hidden');
                } else {
                    review.classList.add('hidden');
                }
            }
        });

        loadMoreBtn.textContent = showAll ? 'Show Less Reviews' : 'Load More Reviews';
    }

    loadMoreBtn.addEventListener('click', function () {
        showAll = !showAll;
        updateReviewsDisplay();
    });

    updateReviewsDisplay();
});

// Load More Features 
document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.getElementById('features-container');
    const reviews = Array.from(reviewsContainer.getElementsByClassName('feature'));
    const loadMoreBtn = document.getElementById('show-more-btn');

    const initialReviewsCount = 5;
    let showAll = false;

    function updateReviewsDisplay() {
        reviews.forEach((review, index) => {
            if (showAll) {
                review.classList.remove('hidden');
            } else {
                if (index < initialReviewsCount) {
                    review.classList.remove('hidden');
                } else {
                    review.classList.add('hidden');
                }
            }
        });

        loadMoreBtn.textContent = showAll ? 'View Less Features' : 'View More Features';
    }

    loadMoreBtn.addEventListener('click', function () {
        showAll = !showAll;
        updateReviewsDisplay();
    });

    updateReviewsDisplay();
});



// Slider 
window.onload = function () {
    const slider = document.querySelector('.slider');
    const slide = document.querySelector('.slide');
    const slideCount = slider.children.length;

    for (let i = 0; i < slideCount; i++) {
        let clone = slide.cloneNode(true);
        slider.appendChild(clone);
    }
};



// Access Popup

document.addEventListener('DOMContentLoaded', function () {
    const progressPopup = document.getElementById('progressPopup');
    const openPopupBtn = document.getElementById('openPopupBtn');
    const progressBarFill = document.getElementById('progressBarFill');
    const progressImage = document.getElementById('progressImage');
    const progressTitle = document.getElementById('progressTitle');
    const progressTitle2 = document.getElementById('progressTitle2');
    const loadingDots = document.getElementById('loadingDots');

    openPopupBtn.addEventListener('click', function () {
        progressPopup.classList.remove('hidden');
        startProgress();
    });

    document.addEventListener('click', function (event) {
        if (!progressPopup.contains(event.target) && event.target !== openPopupBtn) {
            progressPopup.classList.add('hidden');
        }
    });

    progressPopup.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    function startProgress() {
        const steps = [
            { title: 'Finding', title2: "Targeted Device", image: './assets/access-1.svg' },
            { title: 'Gaining', title2: "Device Access", image: './assets/access-2.svg' },
            { title: 'Syncing', title2: "Device Data", image: './assets/access-3.svg' },
            { title: 'Control Panel', title2: "is Ready to Start", image: './assets/access-4.svg' }
        ];
        let currentStepIndex = 0;

        function updateProgress() {
            if (currentStepIndex < steps.length) {
                const { title, title2, image } = steps[currentStepIndex];
                progressTitle.textContent = title;
                progressTitle2.textContent = title2;
                progressImage.src = image;
                currentStepIndex++;
                progressBarFill.style.width = (currentStepIndex / steps.length) * 100 + '%';
                loadingDots.classList.add('hidden');
                setTimeout(() => {
                    loadingDots.classList.remove('hidden');
                    setTimeout(updateProgress, 4000);
                }, 400);
            } else {
                window.location.href = './pages/pricing.html';
            }
        }

        updateProgress();
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('textElement');
    setTimeout(() => {
        textElement.classList.remove('text-visible');
        textElement.classList.add('text-hidden');
        setTimeout(() => {
            textElement.textContent = '13896';
            textElement.classList.remove('text-hidden');
            textElement.classList.add('text-visible');
        }, 500);
    }, 2000);
});


// Without Us & With Us Tabs 
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.withoutWithtab-btn');
    const tabContents = document.querySelectorAll('.withoutWithtab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('withoutWithtabactive'));
            // Add active class to the clicked button
            button.classList.add('withoutWithtabactive');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('withoutWithtabactive'));
            // Show the content related to the clicked button
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('withoutWithtabactive');
        });
    });
});


// faqs tabs 
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.faqtab-btn');
    const tabContents = document.querySelectorAll('.faqtab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons and reset images
            tabButtons.forEach(btn => {
                btn.classList.remove('faqsactive');
                const img = btn.querySelector('.tab-icon');
                img.src = btn.getAttribute('data-inactive-img');
            });

            // Add active class to the clicked button and change image
            button.classList.add('faqsactive');
            const activeImg = button.getAttribute('data-active-img');
            button.querySelector('.tab-icon').src = activeImg;

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('faqsactive'));

            // Show the content related to the clicked button
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('faqsactive');
        });
    });
});



function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // Reset timer
        }
    }, 1000);
}

function startDiscountTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // Reset timer
        }
    }, 1000);
}

window.onload = function () {
    let oneHour = 3600; // Duration in seconds (1 hour)
    let fourHours = 4 * 3600; // Duration in seconds (4 hours)
    
    let displayTime = document.querySelector('#time');
    if (displayTime) {
        startTimer(oneHour, displayTime);
    }

    let displayDesktop = document.querySelector('#discount-timer');
    let displayMobile = document.querySelector('#discount-timer2');
    
    if (displayDesktop) {
        startDiscountTimer(fourHours, displayDesktop);
    }

    if (displayMobile) {
        startDiscountTimer(fourHours, displayMobile);
    }
};



// Up Sell Popup 
document.addEventListener('DOMContentLoaded', (event) => {
    const weeklyGetStartedBtn = document.getElementById('getStartedBtnWeekly');
    const monthlyGetStartedBtn = document.getElementById('getStartedBtnMonthly');
    const quarterlyGetStartedBtn = document.getElementById('getStartedBtnQuarterly');
    const yearlyGetStartedBtn = document.getElementById('getStartedBtnYearly');
    const placeorderBtn = document.getElementById('placeorderbtn');

    const upsellPopup = document.getElementById('upsellPopup');
    const closeBtn = document.getElementById('upSellcloseBtn');

    function openPopup() {
        upsellPopup.classList.remove('hidden');
    }

    function closePopup(event) {
        if (event.target === upsellPopup || event.target === closeBtn) {
            upsellPopup.classList.add('hidden');
        }
    }

    weeklyGetStartedBtn.addEventListener('click', function () {
        openPopup();
    });

    monthlyGetStartedBtn.addEventListener('click', function () {
        openPopup();
    });

    quarterlyGetStartedBtn.addEventListener('click', function () {
        openPopup();
    });

    yearlyGetStartedBtn.addEventListener('click', function () {
        openPopup();
    });

    placeorderBtn.addEventListener('click', function () {
        openPopup();
    });

    // Close popup event listeners
    upsellPopup.addEventListener('click', closePopup);
    closeBtn.addEventListener('click', closePopup);
});



// Set default selected plan to Yearly
document.querySelector('#yearly').checked = true;
document.querySelector('#yearlyPlan').classList.add('selected');

document.querySelectorAll('.plan-container').forEach(container => {
    container.addEventListener('click', () => {
        const radio = container.querySelector('input[name="plan"]');
        radio.checked = true;
        
        document.querySelectorAll('.plan-container').forEach(c => {
            c.classList.remove('selected');
        });
        container.classList.add('selected');
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const plans = document.querySelectorAll('.plan-item');
    const selectedClass = 'upsellselected';
    const unselectedClass = 'upsellunselected';

    // Function to select the default plan
    function setDefaultPlan() {
        const defaultPlanId = 'familyPlan'; // ID of the default plan
        const defaultPlan = document.getElementById(defaultPlanId);
        if (defaultPlan) {
            defaultPlan.classList.add(selectedClass);
            defaultPlan.classList.remove(unselectedClass);
        }
    }

    // Set the default plan
    setDefaultPlan();

    // Add click event listener to each plan
    plans.forEach(plan => {
        plan.addEventListener('click', function () {
            plans.forEach(p => {
                p.classList.remove(selectedClass);
                p.classList.add(unselectedClass);
            });

            this.classList.remove(unselectedClass);
            this.classList.add(selectedClass);
        });
    });
});


