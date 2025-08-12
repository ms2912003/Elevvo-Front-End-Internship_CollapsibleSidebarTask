document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    const overlay = document.getElementById('overlay'); 

    function toggleSidebar() {
        sidebar.classList.toggle('open');
        content.classList.toggle('shifted');
        toggleBtn.classList.toggle('shifted');
        overlay.classList.toggle('active'); 
    }

    toggleBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar); 
});