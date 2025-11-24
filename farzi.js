<script>
    // Wait until the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Get the Menu link and the Menu section
        const menuLink = document.querySelector('nav .nav-links li a[href="#menu"]');
        const menuSection = document.getElementById('menu');
        
        // Add click event listener to the "Menu" link
        menuLink.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent default link behavior
            menuSection.classList.toggle('open');  // Toggle the 'open' class on the menu
        });
    });
</script>
