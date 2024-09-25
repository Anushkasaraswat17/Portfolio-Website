// Scroll Animation with Delay
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            setTimeout(() => {
                section.classList.add('visible');
            }, index * 200); // Adding delay for each section
        }
    });
});

// Project Expand/Collapse Functionality
function toggleProject(projectCard) {
    const details = projectCard.querySelector('.project-details');
    const button = projectCard.querySelector('.view-more-btn');

    if (details.style.display === 'block') {
        details.style.display = 'none';
        button.textContent = 'View More';
    } else {
        details.style.display = 'block';
        button.textContent = 'View Less';
    }
}
