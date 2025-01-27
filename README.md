<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XYZ Solutions Limited - Insurance Website</title>
    
    <!-- Link to the CSS file -->
    <link rel="stylesheet" href="Xyz Solutions Style.css">
    
    <!-- Google Fonts link for a unique font -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
</head>
<body>

    <!-- Header with Logo and Navigation -->
    <header>
        <img src="file:///C:/Users/lenovo/Website%20XYZ%20Solutions%20Limited/Logo.png" alt="XYZ Solutions Logo"> <!-- Updated logo path -->
        <h1>XYZ Solutions Limited</h1>
        <nav>
            <a href="#" id="home-link">Home</a>
            <a href="#" id="life-insurance-link">Life Insurance</a>
            <a href="#" id="investment-link">Investment</a>
            <a href="#" id="quote-link">Get a Quote</a>
        </nav>
    </header>

    <!-- Sections -->
    <section id="hero" class="active">
        <div class="hero-content">
            <h1>Bridging Your Past, Present, and Future With our Trusted Insurance Plans</h1>
            <p>Find the Perfect Policy: Life, Medical, General, and Investment Quotes in One Click.</p>

        </div>
    </section>

    <section id="Life-Insurance">
        <h2>Life Insurance</h2>
        <p>Protect your family's future with a comprehensive life insurance policy.</p>
        
        <label for="life-insurance-options">Choose a Life Insurance Option:</label>
        <select id="life-insurance-options">
            <option value="Career Path">Career Path(Jubilee)</option>
            <option value="investment">Bima Yako(Madison)</option>
            <option value="retirement">Shule Msingi bora(Liberty)</option>
        </select>
    </section>
    
    <section id="Investment">
        <h2>Create Wealth</h2>
       <!-- <p>Protect your family's future.</p> -->
        <label for="Investment options">Choose Investment Option:</label>
        <select id="Investment options">
            <option value="Investment">Money Max Plus(Jubilee)</option>
            <option value="investment">Uniplan(Madison)</options>
            <option value="Investment">Hekima(Britam)</option>
        </select>
    </section>

    <section id="quote-form">
        <h2>Get Your Quote</h2>
        <form id="Y-solution-form" action="#" method="POST">
            <div>
                <label for="client-name">Full Name:</label>
                <input type="text" id="client-name" name="client-name" required>
            </div>

            <div>
                <label for="client-email">Email Address:</label>
                <input type="email" id="client-email" name="client-email" required>
            </div>

            <div>
                <label for="client-tel">Telephone Number:</label>
                <input type="tel" id="client-tel" name="client-tel" required>
            </div>
            <div>
                <label for="client-tel">Iam Interested on:</label> 
        <select id="Investment options">
            <option value="Investment">Education  Plan</option>
            <option value="investment">Investment Plan</options>
            <option value="Investment">Retirement Plan</option>
        </select>
            </div>

            <div>
                <button type="submit" class="cta-btn">Submit</button>
            </div>
        </form>
    </section>

    <!-- Link to JavaScript file -->
    <script src=Script.js></script>
    
    

</body>
</html>
/* Global styles for the page */
body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #F5F5F5; /* Light background */
    color: #2C3E50;
    overflow-x: hidden; /* Prevent horizontal scrolling */
}

header {
    background: #2C3E50;
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header img {
    max-height: 60px; /* Adjust logo size */
}

header h1 {
    font-size: 28px;
    font-weight: bold;
}

nav a {
    margin-left: 20px;
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
}

nav a:hover {
    color: #2980B9;
}

/* Hide sections by default */
section {
    display: none;
}

section.active {
    display: block; /* Show only the active section */
    transition: all 0.5s ease; /* Smooth transition */
}

/* Section styling */
section#hero {
    background: #BDC3C7; /* Soft gray for the past */
    padding: 80px 0;
    text-align: center;
}

section#hero h1 {
    font-size: 40px;
    color: #2C3E50;
}

section#hero p {
    font-size: 18px;
    color: #34495E;
}

section#Life-Insurance, section#Investment, section#quote-form {
    padding: 60px;
    text-align: center;
    background: #ECF0F1; /* Light gray background */
    margin-top: 20px;
}

section#Life-Insurance h2,
section#Investment h2,
section#quote-form h2 {
    font-size: 36px;
    margin-bottom: 20px;
}

section#quote-form {
    background: #FFFFFF; /* Ensure the background is white for the form */
    color: #2C3E50; /* Dark text for readability */
    padding: 40px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Form styling */
form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ECF0F1; /* Light background for the form */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

form div {
    margin-bottom: 15px;
}

label {
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="Invs"] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #BDC3C7; /* Light gray border */
    border-radius: 4px;
    background-color: #ffffff; /* White background for inputs */
}

button.cta-btn {
    background-color: #2980B9; /* Corporate blue */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button.cta-btn:hover {
    background-color: #3498DB; /* Slightly brighter blue */
}
