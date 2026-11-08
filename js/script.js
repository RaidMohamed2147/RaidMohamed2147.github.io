$(document).ready(function () {
    // 1. Sticky Header Elevation Effect on Scroll
    const $header =$('.site-header');
    if ($header.length) {$(window).on('scroll', function () {
            if ($(this).scrollTop() > 20) {$header.addClass('scrolled');
            } else {
                $header.removeClass('scrolled');
            }
        });
    }

    // 2. Contact Form Validation & Submission
    const $contactForm =$('#contactForm');
    if ($contactForm.length) {$contactForm.on('submit', function (e) {
            e.preventDefault();

            let isValid = true;

            // Reset error and success messages
            $('.error-msg').removeClass('visible');$('#formSuccess').removeClass('visible');

            // Name Validation
            const name = $('#fullName').val().trim();
            if (name === '') {
                $('#nameError').addClass('visible');
                isValid = false;
            }

            // Email Validation
            const email = $('#email').val().trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                $('#emailError').addClass('visible');
                isValid = false;
            }

            // Message Validation (min 15 chars)
            const message = $('#message').val().trim();
            if (message.length < 15) {
                $('#messageError').addClass('visible');
                isValid = false;
            }

            // If valid, display success message and reset form
            if (isValid) {
                $('#formSuccess').addClass('visible');
                this.reset();
            }
        });
    }

    // 3. Real-time Search Input Validation & Submission Handling
    const $searchForm =$('.search-form');
    const $searchInput =$('.search-input');

    if ($searchForm.length) {$searchForm.on('submit', function (e) {
            e.preventDefault();
            const query = $searchInput.val().trim();

            if (query.length === 0) {
                $searchInput.addClass('input-error');
                setTimeout(() => $searchInput.removeClass('input-error'), 1200);
                return;
            }

            console.log(`Searching hardware catalog for: "${query}"`);
            alert(`Searching KeMoLap hardware catalog for "${query}"...`);
        });

        $searchInput.on('input', function () {
            if ($(this).hasClass('input-error')) {$(this).removeClass('input-error');
            }
        });
    }

    // 4. Dynamic Navigation Active State
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    $('.nav-link').removeClass('active');$('.nav-link').each(function () {
        const pageHref = $(this).attr('href');
        if (pageHref === currentPath) {
            $(this).addClass('active');
        }
    });

    // 5. Product Matrix Interactive Hover Effect
    $('.product-card')
        .on('mouseenter', function () {
            $(this).css('transform', 'translateY(-6px)');         })         .on('mouseleave', function () {$(this).css('transform', 'translateY(0)');
        });

    // 6. Contact Support Live Status Toggle
    $('.btn-secondary').on('click', function () {
        if ($(this).attr('href') === 'contact.html') {
            console.log('Navigating to Live Support module...');
        }
    });

    // 7. Brand Logos Grid Hover Micro-interactions
    $('.brand-card')
        .on('mouseenter', function () {
            $(this).find('.brand-logo-text').css({
                'color': 'var(--primary)',
                'transition': 'color 0.2s ease'
            });
        })
        .on('mouseleave', function () {
            $(this).find('.brand-logo-text').css('color', 'var(--text-secondary)');
        });
});