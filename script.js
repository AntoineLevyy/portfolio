document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.tab-navigation a');
    const sections = document.querySelectorAll('.section');
    const expandButtons = document.querySelectorAll('.expand-btn');

    // Show the projects section by default
    document.getElementById('projects').classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-section');

            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked link and corresponding section
            link.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });

    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.classList.toggle('hidden');
            button.textContent = content.classList.contains('hidden') ? 'See More' : 'See Less';
        });
    });
});
