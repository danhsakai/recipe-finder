const btnMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.menu__mobile');
const main = document.querySelector('main');
btnMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('menu__mobile--active');
});

const links = document.querySelectorAll('.header__menu-link');
links.forEach((link) => {
  if (link.textContent == 'Home') {
    link.addEventListener('click', () => {
      link.classList.add('header__menu-link--active');
    });
  }
  if (link.textContent == 'About') {
    link.addEventListener('click', () => {
      link.classList.add('header__menu-link--active');
      main.innerHTML = `<section class="about-mission">
        <div class="about-mission__content">
          <p class="about-mission__label">Our mission</p>
          <div class="about-mission__body">
            <h2 class="about-mission__title">
              Help more people cook nourishing meals, more often.
            </h2>
            <p class="about-mission__text">
              Healthy Recipe Finder was created to prove that healthy eating can
              be convenient, affordable, and genuinely delicious.
            </p>
            <p class="about-mission__text">
              We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.
            </p>
          </div>
        </div>
        <img
          class="about-mission__image"
          src="/images/image-about-our-mission-large.webp"
          alt=""
        />
      </section>
      <hr />
      <section class="about-values">
        <h2 class="about-values__title">Why we exist</h2>
        <ul class="about-values__list">
          <li class="about-values__item">
            <h3 class="about-values__item-title">Cut through the noise.</h3>
            <p class="about-values__item-text">
              The internet is bursting with recipes, yet most busy cooks still
              default to take-away or packaged foods. We curate a tight
              collection of fool-proof dishes so you can skip the scrolling and
              start cooking..
            </p>
          </li>
          <li class="about-values__item">
            <h3 class="about-values__item-title">Empower home kitchens.</h3>
            <p class="about-values__item-text">
              When you control what goes into your meals, you control how you
              feel. Every recipe is built around unrefined ingredients and ready
              in about half an hour of active prep.
            </p>
          </li>
          <li class="about-values__item">
            <h3 class="about-values__item-title">Make healthy look good.</h3>
            <p class="about-values__item-text">
              High-resolution imagery shows you exactly what success looks
              like—because we eat with our eyes first, and confidence matters.
            </p>
          </li>
        </ul>
      </section>
      <hr />
      <section class="about-philosophy">
        <h2 class="about-philosophy__title">Our food philosophy</h2>
        <ul class="about-philosophy__list">
          <li class="about-philosophy__item">
            <h3 class="about-philosophy__item-title">
              Whole ingredients first.
            </h3>
            <p class="about-philosophy__item-text">
              Fresh produce, grains, legumes, herbs, and quality fats form the
              backbone of every recipe.
            </p>
          </li>
          <li class="about-philosophy__item">
            <h3 class="about-philosophy__item-title">
              Flavor without compromise.
            </h3>
            <p class="about-philosophy__item-text">
              Spices, citrus, and natural sweetness replace excess salt, sugar,
              and additives.
            </p>
          </li>
          <li class="about-philosophy__item">
            <h3 class="about-philosophy__item-title">Respect for time.</h3>
            <p class="about-philosophy__item-text">
              Weeknight meals should slot into real schedules; weekend cooking
              can be leisurely but never wasteful..
            </p>
          </li>
          <li class="about-philosophy__item">
            <h3 class="about-philosophy__item-title">Sustainable choices.</h3>
            <p class="about-philosophy__item-text">
              Short ingredient lists cut down on food waste and carbon
              footprint, while plant-forward dishes keep things planet-friendly.
            </p>
          </li>
        </ul>
      </section>
      <hr />
      <section class="about-impact">
        <div class="about-impact__content">
          <h2 class="about-impact__title">Beyond the plate</h2>
          <p class="about-impact__text">
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>
          <ul class="about-impact__list">
            <li class="about-impact__item">
              Encourage family dinners and social cooking.
            </li>
            <li class="about-impact__item">
              Spark curiosity about seasonal produce and local agriculture.
            </li>
            <li class="about-impact__item">
              Reduce reliance on single-use packaging and delivery waste.
            </li>
          </ul>
        </div>
        <img
          class="about-impact__image"
          src="/images/image-about-beyond-the-plate-large.webp"
          alt=""
        />
      </section>
      <section class="cta">
        <div class="cta__decoration cta__decoration--left">
          <img src="/images/pattern-fork.svg" alt="" />
        </div>
        <div class="cta__content">
          <h3 class="cta__title">Ready to cook smarter?</h3>
          <p class="cta__text">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <button class="cta__button">Browse recipes</button>
        </div>
        <div class="cta__decoration cta__decoration--right">
          <img src="/images/pattern-knife.svg" alt="" />
        </div>
      </section>`;
    });
  }
});
