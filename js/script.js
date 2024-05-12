var carousel = new bootstrap.Carousel(document.getElementById('imageCarousel'), {
    interval: 5000 // 5 seconds
});

document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action
    document.getElementById('homepage').style.display = 'block'; // Show the home page
    document.getElementById('aboutuspage').style.display = 'none'; 
    document.getElementById('aboutchamberpage').style.display = 'none';
    document.getElementById('leadershippage').style.display = 'none';
    document.getElementById('servicespage').style.display = 'none';
    document.getElementById('eventspage').style.display = 'none';
    document.getElementById('gallerypage').style.display = 'none';
    document.getElementById('contactuspage').style.display = 'none';

    document.title = "Home "; // Set the title to "Home Page"
});

document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action
    document.getElementById('homepage').style.display = 'none'; // Hide the home page
    document.getElementById('aboutuspage').style.display = 'block'; 
    document.getElementById('aboutchamberpage').style.display = 'none';
    document.getElementById('leadershippage').style.display = 'none';
    document.getElementById('servicespage').style.display = 'none';
    document.getElementById('eventspage').style.display = 'none';
    document.getElementById('gallerypage').style.display = 'none';
    document.getElementById('contactuspage').style.display = 'none';

    document.title = "About Us"; // Set the title to "About Us Page"
});

document.getElementById('aboutchamber-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('aboutchamberpage').style.display = 'block';
    document.getElementById('aboutuspage').style.display = 'none';
    document.getElementById('leadershippage').style.display = 'none';
    document.getElementById('servicespage').style.display = 'none';
    document.getElementById('eventspage').style.display = 'none';
    document.getElementById('gallerypage').style.display = 'none';
    document.getElementById('contactuspage').style.display = 'none';
    document.getElementById('homepage').style.display = 'none';
    document.title = "About Chamber ";
});

document.getElementById('leadership-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('leadershippage').style.display = 'block';
    document.getElementById('aboutuspage').style.display = 'none';
    document.getElementById('aboutchamberpage').style.display = 'none';
    document.getElementById('servicespage').style.display = 'none';
    document.getElementById('eventspage').style.display = 'none';
    document.getElementById('gallerypage').style.display = 'none';
    document.getElementById('contactuspage').style.display = 'none';
    document.getElementById('homepage').style.display = 'none';
    document.title = "Leadership";
});

document.getElementById('services-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('servicespage').style.display = 'block';
    document.getElementById('aboutuspage').style.display = 'none';
    document.getElementById('aboutchamberpage').style.display = 'none';
    document.getElementById('leadershippage').style.display = 'none';
    document.getElementById('eventspage').style.display = 'none';
    document.getElementById('gallerypage').style.display = 'none';
    document.getElementById('contactuspage').style.display = 'none';

    document.title = "Services";
});

document.getElementById('events-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('eventspage').style.display = 'block';
    document.getElementById('aboutuspage').style.display = 'none';
    document.getElementById('aboutchamberpage').style.display = 'none';
    document.getElementById('leadershippage').style.display = 'none';
    document.getElementById('servicespage').style.display = 'none';
    document.getElementById('gallerypage').style.display = 'none';
    document.getElementById('contactuspage').style.display = 'none';
    document.getElementById('homepage').style.display = 'none';
    document.title = "Events";
});

document.getElementById('gallery-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('gallerypage').style.display = 'block';
    document.getElementById('aboutuspage').style.display = 'none';
    document.getElementById('aboutchamberpage').style.display = 'none';
    document.getElementById('leadershippage').style.display = 'none';
    document.getElementById('servicespage').style.display = 'none';
    document.getElementById('eventspage').style.display = 'none';
    document.getElementById('contactuspage').style.display = 'none';
    document.getElementById('homepage').style.display = 'none';
    document.title = "Gallery";
});

document.getElementById('contactus-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contactuspage').style.display = 'block';
    document.getElementById('aboutuspage').style.display = 'none';
    document.getElementById('aboutchamberpage').style.display = 'none';
    document.getElementById('leadershippage').style.display = 'none';
    document.getElementById('servicespage').style.display = 'none';
    document.getElementById('eventspage').style.display = 'none';
    document.getElementById('gallerypage').style.display = 'none';
    document.getElementById('homepage').style.display = 'none';
    document.title = "Contact Us";
});



// var links = document.querySelectorAll('.navbar-nav a');
// links.forEach(function(link) {
//     link.addEventListener('click', function() {
//         // Remove the active-link class from all links
//         links.forEach(function(link) {
//             link.classList.remove('active-link');
//         });

//         // Add the active-link class to the clicked link
//         this.classList.add('active-link');
//     });
// });