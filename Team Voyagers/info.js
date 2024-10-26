$(document).ready(function() {
    const exoplanets = [
      { name: "Supersaturn", id: "supersaturn", 
        description: `
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exoplanet: Super Saturn</title>
    <style>
        /* General body styling */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #1e1e1e; /* Dark background for contrast */
            color: white; /* White text color */
            display: flex;
            justify-content: center;
            padding-top: 20px;
        }

        /* Container for content */
        .content {
            width: 70%;
            padding: 20px;
            box-sizing: border-box;
            position: relative; /* Allows absolute positioning of images */
        }

        /* Title Styling */
        .title {
            text-align: center;
            font-size: 2.0em;
            color: #ffcc00;
            margin-top: 20px; /* Space from top */
            margin-bottom: 20px; /* Space from overview container */
            padding-bottom: 10px;
            border-bottom: 2px solid #ffcc00;
        }

        /* Styling for each section container */
        .section-container {
            margin-bottom: 20px;
            padding: 15px;
            border-left: 3px solid #ffcc00; /* Accent border color */
            border-radius: 8px;
        }

        /* Styling for section headings */
        .section-container h2 {
            margin-top: 0;
            margin-bottom: 10px;
            color: #ffcc00; /* Accent color for headings */
            font-size: 1.5em;
        }

        /* Styling for images */
        .figure {
            position: absolute;
            text-align: center;
            color: #ffcc00;
        }

        /* First image positioning */
        .figure1 {
            top: 180px;
            right: -320px; /* Moved 100px further to the right */
        }

        /* Second image positioning */
        .figure2 {
            top: 520px;
            right: -320px; /* Moved 100px further to the right */
        }

        .figure img {
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
            height: 200px;
            width: 250px;
        }

        .figure figcaption {
            margin-top: 8px;
            font-size: 0.9em;
        }
    </style>
</head>
<body>

    <div class="content">

        <!-- Exoplanet Title -->
        <div class="title">Super Saturn (J1407b)</div>

        <!-- Overview Section -->
        <div class="section-container" id="overview">
            <h2>Overview</h2>
            <p>
                Known as "Super Saturn," the exoplanet J1407b gained attention due to its massive ring system, which is far larger than that of Saturn in our Solar System. Discovered in 2012 by astronomers from the University of Rochester, J1407b orbits the star J1407, about 434 light-years away from Earth.
                This exoplanet is considered a gas giant, possibly similar to Jupiter or Saturn, but with an enormous ring structure spanning approximately 120 million kilometers. Its atmosphere likely consists of hydrogen and helium, common among gas giants, although its exact composition remains unconfirmed.
            </p>
        </div>

        <!-- Location Section -->
        <div class="section-container" id="location">
            <h2>Location</h2>
            <p>
                J1407b resides in the constellation Centaurus, approximately 434 light-years away from Earth. This distant location makes detailed observations challenging, yet its immense ring system has provided valuable insights.
            </p>
        </div>

        <!-- Host Star and Orbital Information Section -->
        <div class="section-container" id="host-star">
            <h2>Host Star and Orbital Information</h2>
            <p>
                Super Saturn orbits the young star J1407, which is about 16 million years old. J1407b has an orbital period of around a decade, and its distance from its host star is comparable to the distance between Saturn and the Sun. The extensive ring system suggests that the exoplanet is still in its early stages of formation, possibly gathering material to form moons.
            </p>
        </div>

        <!-- Fun Fact Section -->
        <div class="section-container" id="fun-fact">
            <h2>Fun Fact</h2>
            <p>
                J1407b’s rings are estimated to be about 200 times larger than those of Saturn! If J1407b were in our Solar System, its rings would dominate Earth’s night sky.
            </p>
        </div>

        <!-- Independent Images with Captions -->
        <figure class="figure figure1">
            <img src="supersaturn.webp" alt="Image of Super Saturn">
            <figcaption>Image 1: Illustration of J1407b aka Supeer Saturn' Rings</figcaption>
        </figure>
        
        <figure class="figure figure2">
            <video width="250px" height="250px" controls><source src="supersaturnvideo.webm" type= "video/mp4"></video> 
            <figcaption>Image 2: Digital Description Video of Super Saturn</figcaption>
        </figure>

    </div>

</body>
</html>

    `  },
      { name: "Kepler 22b", id: "kepler-22b", 
        description: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exoplanet: Kepler-22b</title>
    <style>
        /* General body styling */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #1e1e1e; /* Dark background for contrast */
            color: white; /* White text color */
            display: flex;
            justify-content: center;
            padding-top: 20px;
        }

        /* Container for content */
        .content {
            width: 70%;
            padding: 20px;
            box-sizing: border-box;
            position: relative; /* Allows absolute positioning of images */
        }

        /* Title Styling */
        .title {
            text-align: center;
            font-size: 2.0em;
            color: #ffcc00;
            margin-top: 20px; /* Space from top */
            margin-bottom: 20px; /* Space from overview container */
            padding-bottom: 10px;
            border-bottom: 2px solid #ffcc00;
        }

        /* Styling for each section container */
        .section-container {
            margin-bottom: 20px;
            padding: 15px;
            border-left: 3px solid #ffcc00; /* Accent border color */
            border-radius: 8px;
        }

        /* Styling for section headings */
        .section-container h2 {
            margin-top: 0;
            margin-bottom: 10px;
            color: #ffcc00; /* Accent color for headings */
            font-size: 1.5em;
        }

        /* Styling for images */
        .figure {
            position: absolute;
            text-align: center;
            color: #ffcc00;
        }

        /* First image positioning */
        .figure1 {
            top: 180px;
            right: -320px; /* Move image to the right */
        }

        /* Second image positioning */
        .figure2 {
            top: 520px;
            right: -320px; /* Move image to the right */
        }

        .figure img {
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
            height: 200px;
            width: 300px;
        }

        .figure figcaption {
            margin-top: 8px;
            font-size: 0.9em;
        }
    </style>
</head>
<body>

    <div class="content">

        <!-- Exoplanet Title -->
        <div class="title">Kepler-22b</div>

        <!-- Overview Section -->
        <div class="section-container" id="overview">
            <h2>Overview</h2>
            <p>
                Kepler-22b is one of the most intriguing exoplanets discovered as it orbits within the habitable zone of its star. It was identified in 2011 by NASA's Kepler Space Telescope. This exoplanet has earned significant interest because it could potentially support liquid water on its surface. The planet is about 2.4 times the radius of Earth, making it a "super-Earth" and potentially a rocky or ocean-covered world, though its exact composition remains unknown.
            </p>
        </div>

        <!-- Location Section -->
        <div class="section-container" id="location">
            <h2>Location</h2>
            <p>
                Kepler-22b is located approximately 600 light-years away in the constellation Cygnus. The planet’s position within its host star's habitable zone makes it a key target in the search for Earth-like planets.
            </p>
        </div>

        <!-- Host Star and Orbital Information Section -->
        <div class="section-container" id="host-star">
            <h2>Host Star and Orbital Information</h2>
            <p>
                Kepler-22b orbits a star similar to our Sun, classified as a G-type main-sequence star. The planet completes an orbit in about 290 days, a duration comparable to Earth's year, though it is slightly closer to its star. This orbital configuration places Kepler-22b within the habitable zone, where conditions might allow for the presence of liquid water.
            </p>
        </div>

        <!-- Fun Fact Section -->
        <div class="section-container" id="fun-fact">
            <h2>Fun Fact</h2>
            <p>
                Kepler-22b was the first exoplanet discovered within the habitable zone of a star similar to our Sun. The habitable zone is the region around a star where conditions might be right for liquid water to exist on a planet's surface, potentially allowing for life as we know it.Kepler-22b is classified as a super-Earth, meaning it is larger than Earth but smaller than gas giants like Neptune.<br>
                It has a radius about 2.4 times that of Earth. While its exact composition is still unknown, scientists speculate that it could be rocky, similar to Earth, or covered with oceans, given its location in the habitable zone.<br> Kepler-22b was discovered by NASA's Kepler Space Telescope, which launched in 2009 with the goal of finding Earth-like planets in habitable zones around other stars.
                The mission revolutionized our understanding of exoplanets and the potential for life beyond Earth.
            </p>
        </div>

        <!-- Independent Images with Captions -->
        <figure class="figure figure1">
            <img src="kepler22b_2.webp" alt="Artistic Image Image of Kepler-22b">
            <figcaption>Image 1: Artistic Impression of Kepler-22b</figcaption>
        </figure>
        
        <figure class="figure figure2">
            <img src="kepler-22b_1.png" alt="Another view of Kepler-22b compared to earth">
            <figcaption>Image 2: Kepler-22b in Relation to Its Star</figcaption>
        </figure>

    </div>

</body>
</html>

        ` },
      { name: "55 Cancri e", id: "55-cancri-e", description: 
        `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exoplanet: 55 Cancri e</title>
    <style>
        /* General body styling */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #1e1e1e; /* Dark background for contrast */
            color: white; /* White text color */
            display: flex;
            justify-content: center;
            padding-top: 20px;
        }

        /* Container for content */
        .content {
            width: 70%;
            padding: 20px;
            box-sizing: border-box;
            position: relative; /* Allows absolute positioning of images */
        }

        /* Title Styling */
        .title {
            text-align: center;
            font-size: 2.0em;
            color: #ffcc00;
            margin-top: 20px; /* Space from top */
            margin-bottom: 20px; /* Space from overview container */
            padding-bottom: 10px;
            border-bottom: 2px solid #ffcc00;
        }

        /* Styling for each section container */
        .section-container {
            margin-bottom: 20px;
            padding: 15px;
            border-left: 3px solid #ffcc00; /* Accent border color */
            border-radius: 8px;
        }

        /* Styling for section headings */
        .section-container h2 {
            margin-top: 0;
            margin-bottom: 10px;
            color: #ffcc00; /* Accent color for headings */
            font-size: 1.5em;
        }

        /* Styling for images */
        .figure {
            position: absolute;
            text-align: center;
            color: #ffcc00;
        }

        /* First image positioning */
        .figure1 {
            top: 180px;
            right: -320px; /* Move image to the right */
        }

        /* Second image positioning */
        .figure2 {
            top: 520px;
            right: -320px; /* Move image to the right */
        }

        .figure img {
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
            height: 200px;
            width: 300px;
        }

        .figure figcaption {
            margin-top: 8px;
            font-size: 0.9em;
        }
    </style>
</head>
<body>

    <div class="content">

        <!-- Exoplanet Title -->
        <div class="title">55 Cancri e</div>

        <!-- Overview Section -->
        <div class="section-container" id="overview">
            <h2>Overview</h2>
            <p>
                55 Cancri e is a fascinating exoplanet located in the constellation Cancer. Discovered in 2004, it is a super-Earth, meaning it has a mass larger than Earth's but significantly less than that of Uranus or Neptune. This exoplanet is believed to be composed primarily of carbon, with a likely composition of graphite and diamond. Its proximity to its host star suggests that it experiences extreme temperatures, with surface conditions potentially capable of supporting exotic forms of carbon-based life.
            </p>
        </div>

        <!-- Location Section -->
        <div class="section-container" id="location">
            <h2>Location</h2>
            <p>
                55 Cancri e is situated approximately 41 light-years away from Earth, orbiting a star known as 55 Cancri A. It is part of a binary star system, with its companion star being 55 Cancri B. The planet’s position within its host star's habitable zone is still a subject of debate among astronomers.
            </p>
        </div>

        <!-- Host Star and Orbital Information Section -->
        <div class="section-container" id="host-star">
            <h2>Host Star and Orbital Information</h2>
            <p>
                55 Cancri e orbits the star 55 Cancri A, which is a G-type star similar to our Sun. The planet has a very short orbital period, completing a revolution around its star in just 18 hours, placing it much closer to its star than Mercury is to the Sun. This close proximity results in extremely high surface temperatures, estimated to be over 1,700 degrees Fahrenheit (about 925 degrees Celsius).
            </p>
        </div>

        <!-- Fun Fact Section -->
        <div class="section-container" id="fun-fact">
            <h2>Fun Fact</h2>
            <p>
                55 Cancri e is sometimes referred to as a "diamond planet" due to its high carbon content, which could mean that a significant portion of its mass is made up of diamond. Scientists estimate that the planet's interior could contain a vast amount of diamond, possibly enough to make it one of the most valuable planets in the galaxy if it were accessible!<br>
                This exoplanet is located very close to its host star, 55 Cancri A, leading to extreme surface conditions. It experiences temperatures of over 1,000 degrees Celsius (1,832 degrees Fahrenheit), making it one of the hottest known exoplanets. Such high temperatures suggest that any water present would exist as vapor rather than liquid.<br>
                
            </p>
        </div>

        <!-- Independent Images with Captions -->
        <figure class="figure figure1">
            <img src="55cancri_2.jpg" alt="Image of 55 Cancri e">
            <figcaption>Image 1: Artistic Impression of 55 Cancri e</figcaption>
        </figure>
        
        <figure class="figure figure2">
            <img src="55cancri_1.jpg" alt="Another view of 55 Cancri e">
            <figcaption>Image 2: 55 Cancri e visualised near its host</figcaption>
        </figure>

    </div>

</body>
</html>

        `
       },
      { name: "PSR B1620-26 B", id: "pSR B1620-26 B", description: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exoplanet: PSR B1620-26 B</title>
    <style>
        /* General body styling */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #1e1e1e; /* Dark background for contrast */
            color: white; /* White text color */
            display: flex;
            justify-content: center;
            padding-top: 20px;
        }

        /* Container for content */
        .content {
            width: 70%;
            padding: 20px;
            box-sizing: border-box;
            position: relative; /* Allows absolute positioning of images */
        }

        /* Title Styling */
        .title {
            text-align: center;
            font-size: 2.0em;
            color: #ffcc00;
            margin-top: 20px; /* Space from top */
            margin-bottom: 20px; /* Space from overview container */
            padding-bottom: 10px;
            border-bottom: 2px solid #ffcc00;
        }

        /* Styling for each section container */
        .section-container {
            margin-bottom: 20px;
            padding: 15px;
            border-left: 3px solid #ffcc00; /* Accent border color */
            border-radius: 8px;
        }

        /* Styling for section headings */
        .section-container h2 {
            margin-top: 0;
            margin-bottom: 10px;
            color: #ffcc00; /* Accent color for headings */
            font-size: 1.5em;
        }

        /* Styling for images */
        .figure {
            position: absolute;
            text-align: center;
            color: #ffcc00;
        }

        /* First image positioning */
        .figure1 {
            top: 180px;
            right: -320px; /* Move image to the right */
        }

        /* Second image positioning */
        .figure2 {
            top: 520px;
            right: -320px; /* Move image to the right */
        }

        .figure img {
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
            height: 200px;
            width: 250px;
        }

        .figure figcaption {
            margin-top: 8px;
            font-size: 0.9em;
        }
    </style>
</head>
<body>

    <div class="content">

        <!-- Exoplanet Title -->
        <div class="title">PSR B1620-26 B</div>

        <!-- Overview Section -->
        <div class="section-container" id="overview">
            <h2>Overview</h2>
            <p>
                PSR B1620-26 B is an intriguing exoplanet located in the globular cluster M4, approximately 12,400 light-years away from Earth. Discovered in 2003, this planet orbits a pulsar (PSR B1620-26), which is a rapidly spinning neutron star. PSR B1620-26 B is one of the oldest known exoplanets, estimated to be around 13 billion years old, making it a significant object of study for understanding the formation of planets in the early universe. Its mass is roughly 2.5 times that of Jupiter, and it is believed to have a gaseous composition.
            </p>
        </div>

        <!-- Location Section -->
        <div class="section-container" id="location">
            <h2>Location</h2>
            <p>
                PSR B1620-26 B resides in the globular cluster M4, which is situated in the constellation Scorpius. This cluster is one of the nearest globular clusters to Earth and contains hundreds of thousands of stars. The unique environment of a globular cluster, where stars are packed closely together, creates a different dynamic for planet formation compared to regions in the Milky Way.
            </p>
        </div>

        <!-- Host Star and Orbital Information Section -->
        <div class="section-container" id="host-star">
            <h2>Host Star and Orbital Information</h2>
            <p>
                The exoplanet orbits PSR B1620-26, a millisecond pulsar that spins at a rapid rate of about 162 times per second. The planet's orbital period is approximately 6.2 days, meaning it completes an orbit around the pulsar in a relatively short timeframe. The close proximity of the planet to its host star results in extreme radiation and gravitational effects, making it a fascinating subject for studying planetary dynamics in unusual environments.
            </p>
        </div>

        <!-- Fun Fact Section -->
        <div class="section-container" id="fun-fact">
            <h2>Fun Fact</h2>
            <p>
                PSR B1620-26 B is often referred to as "Methuselah" due to its age. Being around 13 billion years old, it provides valuable insights into how planets formed in the early universe, shortly after the Big Bang. Its existence challenges our understanding of planet formation and survival in environments with intense radiation and stellar interactions.
            </p>
        </div>

        <!-- Independent Images with Captions -->
        <figure class="figure figure1">
            <img src="methu_1.jpg" alt="Visualization Image of PSR B1620-26 B">
            <figcaption>Image 1: Artistic Impression of PSR B1620-26 B</figcaption>
        </figure>
        
        <figure class="figure figure2">
            <img src="methu_2.jpg" alt="The evolution of the PSR B1620-26 system">
            <figcaption>Image 2: PSR B1620-26 B in Context</figcaption>
        </figure>

    </div>

</body>
</html>


        ` },
      { name: "PSR J1719-1483 b", id: "psr-j1719-1483-b", description: 
        `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exoplanet: PSR J1719-1483 b</title>
    <style>
        /* General body styling */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #1e1e1e; /* Dark background for contrast */
            color: white; /* White text color */
            display: flex;
            justify-content: center;
            padding-top: 20px;
        }

        /* Container for content */
        .content {
            width: 70%;
            padding: 20px;
            box-sizing: border-box;
            position: relative; /* Allows absolute positioning of images */
        }

        /* Title Styling */
        .title {
            text-align: center;
            font-size: 2.0em;
            color: #ffcc00;
            margin-top: 20px; /* Space from top */
            margin-bottom: 20px; /* Space from overview container */
            padding-bottom: 10px;
            border-bottom: 2px solid #ffcc00;
        }

        /* Styling for each section container */
        .section-container {
            margin-bottom: 20px;
            padding: 15px;
            border-left: 3px solid #ffcc00; /* Accent border color */
            border-radius: 8px;
        }

        /* Styling for section headings */
        .section-container h2 {
            margin-top: 0;
            margin-bottom: 10px;
            color: #ffcc00; /* Accent color for headings */
            font-size: 1.5em;
        }

        /* Styling for images */
        .figure {
            position: absolute;
            text-align: center;
            color: #ffcc00;
        }

        /* First image positioning */
        .figure1 {
            top: 180px;
            right: -320px; /* Move image to the right */
        }

        /* Second image positioning */
        .figure2 {
            top: 520px;
            right: -320px; /* Move image to the right */
        }

        .figure img {
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
            height: 200px;
            width: 250px;
        }

        .figure figcaption {
            margin-top: 8px;
            font-size: 0.9em;
        }
    </style>
</head>
<body>

    <div class="content">

        <!-- Exoplanet Title -->
        <div class="title">PSR J1719-1483 b</div>

        <!-- Overview Section -->
        <div class="section-container" id="overview">
            <h2>Overview</h2>
            <p>
                PSR J1719-1483 b is a unique exoplanet located approximately 4,000 light-years away from Earth, orbiting the pulsar PSR J1719-1483. Discovered in 2003, this planet is notable for being one of the first exoplanets found around a pulsar, which is a highly magnetized rotating neutron star. PSR J1719-1483 b is classified as a gas giant, and its extreme environment raises interesting questions about the potential for life and the evolution of planets in such conditions.
            </p>
        </div>

        <!-- Location Section -->
        <div class="section-container" id="location">
            <h2>Location</h2>
            <p>
                PSR J1719-1483 b is situated in the constellation Virgo, approximately 4,000 light-years away from our solar system. The pulsar's location allows for precise measurements of the planet's orbit and characteristics, offering valuable insights into the dynamics of exoplanetary systems around neutron stars.
            </p>
        </div>

        <!-- Host Star and Orbital Information Section -->
        <div class="section-container" id="host-star">
            <h2>Host Star and Orbital Information</h2>
            <p>
                The planet orbits the pulsar PSR J1719-1483, which has a rotation period of approximately 5.3 milliseconds. This rapid rotation produces intense radiation and gravitational waves, making the environment around this planet extremely hostile. PSR J1719-1483 b completes an orbit around its pulsar in just 2.2 days, indicating a very close proximity to its host star, which significantly affects its temperature and atmospheric conditions.
            </p>
        </div>

        <!-- Fun Fact Section -->
        <div class="section-container" id="fun-fact">
            <h2>Fun Fact</h2>
            <p>
                PSR J1719-1483 b is often cited as an example of how diverse exoplanetary systems can be. Unlike typical planets that orbit main-sequence stars, this planet's existence around a pulsar challenges our understanding of planetary formation and survival in extreme conditions. <br>
                PSR J1719-1483 b is part of the first confirmed planetary system around a millisecond pulsar, PSR J1719-1483. This discovery was significant as it showcased that planets could form and exist in extreme environments typically inhospitable to planetary systems.
            </p>
        </div>

        <!-- Independent Images with Captions -->
        <figure class="figure figure1">
            <img src="psr_1.jpg" alt="Visualization of PSR J1719-1483 b">
            <figcaption>Image 1: Artistic Impression of PSR J1719-1483 b</figcaption>
        </figure>
        
        <figure class="figure figure2">
            <img src="psr_2.jpg" alt=" View of PSR J1719-1483 b with its host Pulsar">
            <figcaption>Image 2: PSR J1719-1483 b in Context</figcaption>
        </figure>

    </div>

</body>
</html>

        `
       },
      { name: "51 Pegasi b", id: "51-pegasi-b", description: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exoplanet: 51 Pegasi b</title>
    <style>
        /* General body styling */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #1e1e1e; /* Dark background for contrast */
            color: white; /* White text color */
            display: flex;
            justify-content: center;
            padding-top: 20px;
        }

        /* Container for content */
        .content {
            width: 70%;
            padding: 20px;
            box-sizing: border-box;
            position: relative; /* Allows absolute positioning of images */
        }

        /* Title Styling */
        .title {
            text-align: center;
            font-size: 2.0em;
            color: #ffcc00;
            margin-top: 20px; /* Space from top */
            margin-bottom: 20px; /* Space from overview container */
            padding-bottom: 10px;
            border-bottom: 2px solid #ffcc00;
        }

        /* Styling for each section container */
        .section-container {
            margin-bottom: 20px;
            padding: 15px;
            border-left: 3px solid #ffcc00; /* Accent border color */
            border-radius: 8px;
        }

        /* Styling for section headings */
        .section-container h2 {
            margin-top: 0;
            margin-bottom: 10px;
            color: #ffcc00; /* Accent color for headings */
            font-size: 1.5em;
        }

        /* Styling for images */
        .figure {
            position: absolute;
            text-align: center;
            color: #ffcc00;
        }

        /* First image positioning */
        .figure1 {
            top: 180px;
            right: -320px; /* Move image to the right */
        }

        /* Second image positioning */
        .figure2 {
            top: 520px;
            right: -320px; /* Move image to the right */
        }

        .figure img {
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
            height: 200px;
            width: 260px;
        }

        .figure figcaption {
            margin-top: 8px;
            font-size: 0.9em;
        }
    </style>
</head>
<body>

    <div class="content">

        <!-- Exoplanet Title -->
        <div class="title">51 Pegasi b</div>

        <!-- Overview Section -->
        <div class="section-container" id="overview">
            <h2>Overview</h2>
            <p>
                51 Pegasi b, often referred to as "Bellerophon," is a landmark exoplanet located approximately 50 light-years away from Earth in the constellation Pegasus. Discovered in 1995, it was the first exoplanet found orbiting a Sun-like star, marking a significant milestone in the field of astronomy. This gas giant is classified as a hot Jupiter due to its close proximity to its host star, which results in high surface temperatures and a unique atmospheric composition.
            </p>
        </div>

        <!-- Location Section -->
        <div class="section-container" id="location">
            <h2>Location</h2>
            <p>
                51 Pegasi b is situated about 50 light-years away in the constellation Pegasus. Its location in such a well-studied region of the sky has made it a focal point for research on exoplanetary atmospheres and dynamics.
            </p>
        </div>

        <!-- Host Star and Orbital Information Section -->
        <div class="section-container" id="host-star">
            <h2>Host Star and Orbital Information</h2>
            <p>
                The planet orbits the G-type star 51 Pegasi, which is similar in size and temperature to our Sun. 51 Pegasi b has an orbital period of just 4.2 days, indicating its very close orbit. This proximity results in extreme temperatures that can reach upwards of 1,000 degrees Celsius, influencing its atmospheric composition and weather patterns.
            </p>
        </div>

        <!-- Fun Fact Section -->
        <div class="section-container" id="fun-fact">
            <h2>Fun Fact</h2>
            <p>
                The discovery of 51 Pegasi b was a groundbreaking moment in astronomy, proving that planets exist outside our solar system and opening the floodgates for the search for other exoplanets. Its study has provided valuable insights into the characteristics and formation of gas giants.
            </p>
        </div>

        <!-- Independent Images with Captions -->
        <figure class="figure figure1">
            <img src="pegasi_1.jpg" alt="Visualization of 51 Pegasi b">
            <figcaption>Image 1: Artistic Impression of 51 Pegasi b</figcaption>
        </figure>
        
        <figure class="figure figure2">
            <img src="pegasi_2.png" alt="51 Pegasi b compared to Jupiter">
            <figcaption>Image 2: 51 Pegasi b in Context</figcaption>
        </figure>

    </div>

</body>
</html>

        ` },
      { name: "Beta Pictoris b", id: "beta-pictoris-b", description: 
        `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exoplanet: Beta Pictoris b</title>
    <style>
        /* General body styling */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #1e1e1e; /* Dark background for contrast */
            color: white; /* White text color */
            display: flex;
            justify-content: center;
            padding-top: 20px;
        }

        /* Container for content */
        .content {
            width: 70%;
            padding: 20px;
            box-sizing: border-box;
            position: relative; /* Allows absolute positioning of images */
        }

        /* Title Styling */
        .title {
            text-align: center;
            font-size: 2.0em;
            color: #ffcc00;
            margin-top: 20px; /* Space from top */
            margin-bottom: 20px; /* Space from overview container */
            padding-bottom: 10px;
            border-bottom: 2px solid #ffcc00;
        }

        /* Styling for each section container */
        .section-container {
            margin-bottom: 20px;
            padding: 15px;
            border-left: 3px solid #ffcc00; /* Accent border color */
            border-radius: 8px;
        }

        /* Styling for section headings */
        .section-container h2 {
            margin-top: 0;
            margin-bottom: 10px;
            color: #ffcc00; /* Accent color for headings */
            font-size: 1.5em;
        }

        /* Styling for images */
        .figure {
            position: absolute;
            text-align: center;
            color: #ffcc00;
        }

        /* First image positioning */
        .figure1 {
            top: 180px;
            right: -320px; /* Move image to the right */
        }

        /* Second image positioning */
        .figure2 {
            top: 520px;
            right: -320px; /* Move image to the right */
        }

        .figure img {
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
            height: 200px;
            width: 250px;
        }

        .figure figcaption {
            margin-top: 8px;
            font-size: 0.9em;
        }
    </style>
</head>
<body>

    <div class="content">

        <!-- Exoplanet Title -->
        <div class="title">Beta Pictoris b</div>

        <!-- Overview Section -->
        <div class="section-container" id="overview">
            <h2>Overview</h2>
            <p>
                Beta Pictoris b is an exoplanet located approximately 63 light-years away in the constellation Pictor. Discovered in 2008, it is one of the first directly imaged exoplanets, providing a unique opportunity to study the characteristics of a planet in its formation stage. This gas giant orbits its host star, Beta Pictoris, within a debris disk, which suggests the potential for ongoing planet formation and the presence of other celestial bodies.
            </p>
        </div>

        <!-- Location Section -->
        <div class="section-container" id="location">
            <h2>Location</h2>
            <p>
                Beta Pictoris b is situated in the constellation Pictor, about 63 light-years away from Earth. This location has made it a prime target for direct imaging and spectroscopic studies, allowing astronomers to analyze its atmosphere and potential weather patterns.
            </p>
        </div>

        <!-- Host Star and Orbital Information Section -->
        <div class="section-container" id="host-star">
            <h2>Host Star and Orbital Information</h2>
            <p>
                The planet orbits the young star Beta Pictoris, which is about 12 million years old and significantly larger than our Sun. Beta Pictoris b has an orbital period of around 18.5 years, and its distance from the star suggests that it resides in a region rich with dust and gas, providing insight into the processes of planet formation.
            </p>
        </div>

        <!-- Fun Fact Section -->
        <div class="section-container" id="fun-fact">
            <h2>Fun Fact</h2>
            <p>
                Beta Pictoris b was one of the first exoplanets to be directly imaged, allowing astronomers to observe its light spectrum and gain insights into its atmospheric composition. This discovery has paved the way for future explorations of directly imaged exoplanets, enhancing our understanding of planetary systems.
            </p>
        </div>

        <!-- Independent Images with Captions -->
        <figure class="figure figure1">
            <img src="beta_1.jpg" alt="Image of Beta Pictoris b">
            <figcaption>Image 1: Artistic Impression of Beta Pictoris b</figcaption>
        </figure>
        
        <figure class="figure figure2">
            <img src="beta_2.jpg" alt="Another view of Beta Pictoris b">
            <figcaption>Image 2: Equatorial spin velocity vs mass for planets <br> comparing Beta Pictoris b to the Solar System planets.</figcaption>
        </figure>

    </div>

</body>
</html>

        `
       },
      { name: "Brown Dwarf 2M1207 b", id: "brown-dwarf-2m1207 b", description:
        `
       <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exoplanet: 2M1207 b</title>
    <style>
        /* General body styling */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #1e1e1e; /* Dark background for contrast */
            color: white; /* White text color */
            display: flex;
            justify-content: center;
            padding-top: 20px;
        }

        /* Container for content */
        .content {
            width: 70%;
            padding: 20px;
            box-sizing: border-box;
            position: relative; /* Allows absolute positioning of images */
        }

        /* Title Styling */
        .title {
            text-align: center;
            font-size: 2.0em;
            color: #ffcc00;
            margin-top: 20px; /* Space from top */
            margin-bottom: 20px; /* Space from overview container */
            padding-bottom: 10px;
            border-bottom: 2px solid #ffcc00;
        }

        /* Styling for each section container */
        .section-container {
            margin-bottom: 20px;
            padding: 15px;
            border-left: 3px solid #ffcc00; /* Accent border color */
            border-radius: 8px;
        }

        /* Styling for section headings */
        .section-container h2 {
            margin-top: 0;
            margin-bottom: 10px;
            color: #ffcc00; /* Accent color for headings */
            font-size: 1.5em;
        }

        /* Styling for images */
        .figure {
            position: absolute;
            text-align: center;
            color: #ffcc00;
        }

        /* First image positioning */
        .figure1 {
            top: 180px;
            right: -320px; /* Move image to the right */
        }

        /* Second image positioning */
        .figure2 {
            top: 520px;
            right: -320px; /* Move image to the right */
        }

        .figure img {
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
            height: 200px;
            width: 250px;
        }

        .figure figcaption {
            margin-top: 8px;
            font-size: 0.9em;
        }
    </style>
</head>
<body>

    <div class="content">

        <!-- Exoplanet Title -->
        <div class="title">2M1207 b</div>

        <!-- Overview Section -->
        <div class="section-container" id="overview">
            <h2>Overview</h2>
            <p>
                2M1207 b is a fascinating exoplanet located approximately 170 light-years away in the constellation Centaurus. Discovered in 2004, it is one of the first directly imaged exoplanets and orbits the brown dwarf 2M1207. The planet is believed to be a gas giant with a mass estimated to be about 5-8 times that of Jupiter, showcasing a unique atmospheric composition and structure that challenges conventional understandings of planet formation.
            </p>
        </div>

        <!-- Location Section -->
        <div class="section-container" id="location">
            <h2>Location</h2>
            <p>
                2M1207 b resides in the constellation Centaurus, approximately 170 light-years from Earth. Its relatively close proximity to Earth has allowed astronomers to study it in detail, leading to valuable insights into the characteristics and dynamics of brown dwarf systems and their planets.
            </p>
        </div>

        <!-- Host Star and Orbital Information Section -->
        <div class="section-container" id="host-star">
            <h2>Host Star and Orbital Information</h2>
            <p>
                The exoplanet orbits 2M1207, a brown dwarf that does not have enough mass to sustain hydrogen fusion like a star. 2M1207 b orbits its host at a significant distance, making it a prime candidate for studying the atmospheric conditions and potential weather patterns of exoplanets. Its discovery has provided valuable information regarding the formation and evolution of planetary systems around substellar objects.
            </p>
        </div>

        <!-- Fun Fact Section -->
        <div class="section-container" id="fun-fact">
            <h2>Fun Fact</h2>
            <p>
                2M1207 b is notable for being one of the first exoplanets to be directly imaged, demonstrating that it's possible to observe planetary bodies outside our Solar System. Its study has significantly enhanced our understanding of atmospheres in substellar objects and paved the way for future explorations of distant worlds.
            </p>
        </div>

        <!-- Independent Images with Captions -->
        <figure class="figure figure1">
            <img src="bd_1.jpg" alt="Image of 2M1207 b">
            <figcaption>2M1207 b – First image of an exoplanet</figcaption>
        </figure>
        
        <figure class="figure figure2">
            <img src="bd_2.jpg" alt="Another view of 2M1207 b">
            <figcaption>Brown Dwarf 2M1207A and Companion</figcaption>
        </figure>

    </div>

</body>
</html>

        `
       }
    ];
  
    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const planetId = urlParams.get('planet');
  
    // Find the corresponding exoplanet
    const planet = exoplanets.find(p => p.id === planetId);
    // const descriptionContainer = document.getElementById("description-container");

if (planet) {
    $('#planet-name').text(planet.name); // Optional: Set the planet name
    $('#description-container').html(planet.description);
} else {
    $('#description-container').html('<p>Planet information not found.</p>');
    }
  });
  

  //// <h2>Overview of Supersaturn</h2>
      // <p>Supersaturn is a massive gas giant exoplanet that is significantly larger than Jupiter, making it one of the most intriguing exoplanets discovered.</p>
      
      // <h3>Physical Characteristics</h3>
      // <ul>
      //   <li>Mass: Approximately 2.3 times that of Jupiter</li>
      //   <li>Diameter: Roughly 1.5 times the size of Jupiter</li>
      //   <li>Atmosphere: Composed primarily of hydrogen and helium</li>
      // </ul>

      // <h3>Orbit and Location</h3>
      // <p>Supersaturn orbits a distant star in the Milky Way galaxy. Its distance from its star suggests it is a cold giant, possibly with ring systems larger than Saturn's.</p>

      // <h3>Interesting Facts</h3>
      // <p>Supersaturn is believed to have rings over twice the diameter of Saturn's, which may be capable of hosting large moons.</p>

      // <img src="supersaturn.webp" alt="Supersaturn illustration" style="width:100%; max-width:300px;" />