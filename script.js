// Smooth popup open
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'flex';

    requestAnimationFrame(() => {
        popup.classList.add('show');
    });

    document.body.style.overflow = 'hidden';
}

// Smooth popup close
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove('show');

    setTimeout(() => {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 350);
}

// Close when clicking outside popup
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup')) {
        closePopup(e.target.id);
    }
});

// Section reveal on scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));
