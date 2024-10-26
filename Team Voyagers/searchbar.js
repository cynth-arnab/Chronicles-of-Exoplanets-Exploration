$(document).ready(function() {
  const exoplanets = [
    { name: "Supersaturn", id: "supersaturn", 
      description: `
      <h2>Overview of Supersaturn</h2>
      <p>Supersaturn is a massive gas giant exoplanet that is significantly larger than Jupiter, making it one of the most intriguing exoplanets discovered.</p>
      
      <h3>Physical Characteristics</h3>
      <ul>
        <li>Mass: Approximately 2.3 times that of Jupiter</li>
        <li>Diameter: Roughly 1.5 times the size of Jupiter</li>
        <li>Atmosphere: Composed primarily of hydrogen and helium</li>
      </ul>

      <h3>Orbit and Location</h3>
      <p>Supersaturn orbits a distant star in the Milky Way galaxy. Its distance from its star suggests it is a cold giant, possibly with ring systems larger than Saturn's.</p>

      <h3>Interesting Facts</h3>
      <p>Supersaturn is believed to have rings over twice the diameter of Saturn's, which may be capable of hosting large moons.</p>

      <img src="supersaturn.webp" alt="Supersaturn illustration" style="width:100%; max-width:300px;" />
    ` },
    { name: "Kepler 22b", id: "kepler-22b", 
      description: `
      <h2>Introduction to Kepler-22b</h2>
      <p>Kepler-22b is one of the first exoplanets discovered within the habitable zone of a Sun-like star, sparking interest in the possibility of life.</p>
      
      <h3>Key Facts</h3>
      <ul>
        <li>Distance from Earth: Approximately 600 light-years</li>
        <li>Size: 2.4 times the radius of Earth</li>
        <li>Orbital Period: 290 days</li>
      </ul>

      <h3>Habitability</h3>
      <p>With a mild temperature range, Kepler-22b could potentially support liquid water. Its atmosphere and surface composition remain subjects of speculation and research.</p>

      <img src="images/kepler-22b.jpg" alt="Kepler 22b artist rendering" style="width:100%; max-width:300px;" />
    ` },
    { name: "55 Cancri e", id: "55-cancri-e", 
      description: `
      <h2>About 55 Cancri e</h2>
      <p>55 Cancri e is a super-Earth exoplanet known for its extremely high temperatures and close orbit to its parent star, 55 Cancri A.</p>

      <h3>Physical Properties</h3>
      <ul>
        <li>Size: Approximately twice Earth's radius</li>
        <li>Surface Temperature: Over 2000°C on the day side</li>
        <li>Atmosphere: Possibly dense with silicate vapor</li>
      </ul>

      <h3>Geological Composition</h3>
      <p>This exoplanet may have a carbon-rich surface, with speculations of a diamond-rich crust due to intense pressure and heat.</p>

      <img src="images/55-cancri-e.jpg" alt="55 Cancri e illustration" style="width:100%; max-width:300px;" />
    ` },
    { name: "PSR B1620-26 B", id: "pSR B1620-26 B", 
      description: `
      <h2>Introducing HD 140283</h2>
      <p>HD 140283, often referred to as the "Methuselah Star," is one of the oldest known stars in our galaxy, potentially harboring planetary bodies.</p>
      
      <h3>Age and Significance</h3>
      <ul>
        <li>Age: Estimated to be over 13 billion years</li>
        <li>Distance from Earth: About 200 light-years</li>
        <li>Composition: Low in heavy elements, characteristic of ancient stars</li>
      </ul>

      <h3>Potential for Planets</h3>
      <p>Although ancient, HD 140283 may have debris that indicates past planetary formation or existing planetary remnants.</p>

      <img src="images/hd-140283.jpg" alt="HD 140283 star" style="width:100%; max-width:300px;" />
    ` },
    { name: "PSR J1719-1483 b", id: "psr-j1719-1483-b", 
      description: `
      <h2>About PSR J1719-1483 b</h2>
      <p>PSR J1719-1483 b is a unique planet orbiting a pulsar, thought to be the remnant of a former star stripped down to a crystalline carbon core.</p>
      
      <h3>Orbital Characteristics</h3>
      <ul>
        <li>Orbit Type: Tight orbit around a pulsar</li>
        <li>Composition: Likely crystalline carbon (potentially "diamond-like")</li>
      </ul>

      <h3>Formation Theories</h3>
      <p>This planet may have once been part of a binary star system, stripped of its outer layers by the pulsar.</p>

      <img src="images/psr-j1719-1483-b.jpg" alt="PSR J1719-1483 b illustration" style="width:100%; max-width:300px;" />
    ` },
    { name: "51 Pegasi b", id: "51-pegasi-b", 
      description: `
      <h2>Introduction to 51 Pegasi b</h2>
      <p>51 Pegasi b, the first exoplanet discovered orbiting a Sun-like star, opened a new era in the study of planets outside our solar system.</p>

      <h3>Characteristics</h3>
      <ul>
        <li>Distance from Earth: Around 50 light-years</li>
        <li>Type: Hot Jupiter</li>
        <li>Orbital Period: 4 days</li>
      </ul>

      <h3>Historical Significance</h3>
      <p>Its discovery in 1995 confirmed the existence of exoplanets, making it a landmark in astronomy.</p>

      <img src="images/51-pegasi-b.jpg" alt="51 Pegasi b artist's impression" style="width:100%; max-width:300px;" />
    ` },
    { name: "Beta Pictoris b", id: "beta-pictoris-b", 
      description: `
      <h2>About Beta Pictoris b</h2>
      <p>Beta Pictoris b is a young, massive exoplanet that orbits within a debris-filled disk surrounding its star, Beta Pictoris.</p>

      <h3>Features</h3>
      <ul>
        <li>Mass: Several times that of Jupiter</li>
        <li>Orbital Distance: Approximately 9 AU (similar to Saturn's distance from the Sun)</li>
      </ul>

      <h3>Unique Aspects</h3>
      <p>The planet’s formation is still ongoing, with an observable debris disk indicating active planetesimal collisions.</p>

      <img src="images/beta-pictoris-b.jpg" alt="Beta Pictoris b image" style="width:100%; max-width:300px;" />
    ` },
    { name: "Brown Dwarf 2M1207 b", id: "brown-dwarf-2m1207 b", 
      description: `
      <h2>Overview of Brown Dwarf 2M1207</h2>
      <p>Brown Dwarf 2M1207 is a substellar object, often classified between a planet and a star, hosting its own planetary companion.</p>

      <h3>Characteristics</h3>
      <ul>
        <li>Mass: Between that of a large planet and a small star</li>
        <li>Type: Brown dwarf with planetary companion</li>
      </ul>

      <h3>Formation and Observation</h3>
      <p>This brown dwarf has a companion, 2M1207 b, providing insight into planetary formation around substellar objects.</p>

      <img src="images/brown-dwarf-2m1207.jpg" alt="Brown Dwarf 2M1207" style="width:100%; max-width:300px;" />
    ` }
  ];

  // Handle search input to show results dynamically
  $("#search").on("input", function() {
    const query = $(this).val().toLowerCase();
    const resultsContainer = $("#search-results");
    resultsContainer.empty();

    if (query) {
      const results = exoplanets.filter(planet => planet.name.toLowerCase().includes(query));
      if (results.length > 0) {
        results.forEach(planet => {
          resultsContainer.append(`<li data-id="${planet.id}">${planet.name}</li>`);
        });
        resultsContainer.show();
      } else {
        resultsContainer.hide();
      }
    } else {
      resultsContainer.hide();
    }
  });

  // Show information on selection or Enter key
  $(document).on("click", "#search-results li", function() {
    const id = $(this).data("id");
    window.location.href = `info.html?planet=${id}`;
  });

  // Handle Enter key press
  $("#search").on("keypress", function(e) {
    if (e.which === 13) { // 13 is the Enter key
      const query = $(this).val().toLowerCase();
      const matchingPlanet = exoplanets.find(planet => planet.name.toLowerCase() === query);
      if (matchingPlanet) {
        window.location.href = `info.html?planet=${matchingPlanet.id}`;
      }
    }
  });

  // Handle button click
  $(".btn-search").on("click", function() {
    const query = $("#search").val().toLowerCase();
    const matchingPlanet = exoplanets.find(planet => planet.name.toLowerCase() === query);
    if (matchingPlanet) {
      window.location.href = `info.html?planet=${matchingPlanet.id}`;
    }
  });

  // Hide search results dropdown when clicking outside
  $(document).click(function(e) {
    if (!$(e.target).closest(".search-box").length) {
      $("#search-results").hide();
    }
  });
});
