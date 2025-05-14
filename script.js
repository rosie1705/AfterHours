// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href').substring(1);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  });
});

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


// Highlight active link on scroll
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

// Media tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const mediaGrids = document.querySelectorAll('.media-grid');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active from all buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    // Hide all media grids
    mediaGrids.forEach(grid => (grid.style.display = 'none'));

    // Activate current tab
    button.classList.add('active');
    const tab = button.getAttribute('data-tab');
    document.getElementById(tab).style.display = 'block';
  });
});

// FAQ toggle functionality
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}