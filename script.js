
    const observerOptions = {
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Target all elements with the 'reveal' class
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
