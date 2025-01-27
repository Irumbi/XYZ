// Get all navigation links
const homeLink = document.getElementById('home-link');
const lifeInsuranceLink = document.getElementById('life-insurance-link');
const investmentLink = document.getElementById('investment-link');
const quoteLink = document.getElementById('quote-link');

// Get all sections
const sections = document.querySelectorAll('section');

// Function to hide all sections
function hideSections() {
    sections.forEach(section => section.classList.remove('active'));
}

// Event listeners for each link
homeLink.addEventListener('click', function() {
    hideSections();
    document.getElementById('hero').classList.add('active');
});

lifeInsuranceLink.addEventListener('click', function() {
    hideSections();
    document.getElementById('Life-Insurance').classList.add('active');
});

investmentLink.addEventListener('click', function() {
    hideSections();
    document.getElementById('Investment').classList.add('active');
});

quoteLink.addEventListener('click', function() {
    hideSections();
    document.getElementById('quote-form').classList.add('active');
});
