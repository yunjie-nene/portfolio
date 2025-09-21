document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        const targetSection = document.getElementById(button.dataset.tab);
        targetSection.classList.add('active');

        const tabsContainer = document.getElementById('content');
        tabsContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Tooltip functionality
document.querySelectorAll('.skill-icon-container').forEach(icon => {
    const tooltipText = icon.getAttribute('data-tooltip');
    if (!tooltipText) return;
    const tooltip = document.createElement('div');
    tooltip.innerText = tooltipText;
    tooltip.style.right = `50%`;
    tooltip.style.transform = 'translateX(50%)';
    tooltip.style.bottom = `-2.3rem`;
    tooltip.style.position = 'absolute';
    tooltip.style.zIndex = '1000';
    tooltip.style.minHeight = '1.5rem';
    tooltip.style.padding = '0.25rem 0.5rem';
    tooltip.style.backgroundColor = '#2a4a36';
    tooltip.style.color = 'white';
    tooltip.style.borderRadius = '6px';
    tooltip.style.fontSize = '0.875rem';
    tooltip.style.transition = 'all 0.3s ease';
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
    tooltip.style.whiteSpace = 'nowrap';
    

    icon.appendChild(tooltip);
    icon._tooltip = tooltip;

    icon.addEventListener('mouseenter', (e) => {



        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    }
    );
    icon.addEventListener('mouseleave', () => {
        if (icon._tooltip) {

            icon._tooltip.style.visibility = 'hidden';
            icon._tooltip.style.opacity = '0';
        }
    });
});