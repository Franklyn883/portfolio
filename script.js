document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-content');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const course = this.closest('.course');
            course.classList.toggle('expanded');
            console.log("Js here");
            if (course.classList.contains('expanded')) {
                this.textContent = 'Read Less';
            } else {
                this.textContent = 'Read More';
            }
        });
    });
});

console.log("Js here");