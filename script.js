// Example: Show an alert when clicking a project link
document.querySelectorAll('.project-card a').forEach(link => {
    link.addEventListener('click', () => {
        alert("Opening project on GitHub!");
    });
});

