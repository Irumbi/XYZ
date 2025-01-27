
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
