// Alert when opening a project
document.querySelectorAll('.project-card a').forEach(link => {
    link.addEventListener('click', () => {
        alert("Opening project on GitHub!");
    });
});


