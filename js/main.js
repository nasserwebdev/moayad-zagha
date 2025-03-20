// Counters
const stats = [
  { id: "stat1", endValue: 6 },
  { id: "stat2", endValue: 300 },
  { id: "stat3", endValue: 37 },
  { id: "stat4", endValue: 450 },
];

let animationStarted = false;

const updateCounters = () => {
  if (!animationStarted) {
    animationStarted = true;

    const duration = 2000; // Duration in milliseconds
    const steps = 60; // Number of updates (smooth animation)
    const intervalTime = duration / steps; // Time between updates

    stats.forEach((stat) => {
      let count = 0;
      const target = stat.endValue;
      const counterElement = document.getElementById(stat.id);
      const increment = target / steps; // Adjusted increment per step

      const incrementCounter = () => {
        count += increment;
        if (count >= target) {
          count = target; // Ensure it stops exactly at the target
          clearInterval(counter);
        }
        counterElement.textContent = Math.round(count).toLocaleString();
      };

      const counter = setInterval(incrementCounter, intervalTime);
    });
  }
};

window.addEventListener("scroll", function onScroll() {
  const statisticsSection = document.getElementById("statistics");
  const rect = statisticsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    updateCounters();
    window.removeEventListener("scroll", onScroll); // Remove event after triggering
  }
});

// Sticky Header On Scroll Backwards

let lastScrollTop = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      header.classList.add('hidden');
    } else {
      // Scrolling up
      header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });

  // Portfolio Filters

  var $port = $('.all-portfolio').isotope({
    // options
    originLeft: false,
    filter: '.websites',
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $port.isotope({ filter: filterValue });

     // Remove 'active' class from all buttons and add to the clicked button
  $('.filter-button-group .btn').removeClass('active');
  $(this).addClass('active');
  });