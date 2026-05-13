/*=============== HOME SPLIT TEXT ===============*/
const { animate, text, stagger } = anime;

const { chars: chars1 } = text.split('.home__profession-1', { chars: true });
const { chars: chars2 } = text.split('.home__profession-2', { chars: true });

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});



/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  }

});


/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetSelector = tab.dataset.target;
    const targetContent = document.querySelector(targetSelector);

    //Disable all tab contents and activate tabs
    tabContents.forEach((content) => content.classList.remove('work-active'));
    tabs.forEach((t) => t.classList.remove('work-active'));

    //Active the tab and corresponding content
    tab.classList.add('work-active');
    targetContent.classList.add('work-active');
  });
});

/*=============== WORK DOT SCROLL INDICATOR ===============*/
//ToDo: Implement by using the Intersection Observer

/*=============== SERVICES ACCORDION ===============*/
const servicesButtons = document.querySelectorAll('.services__button');

servicesButtons.forEach((button) => {
  //Add your height to services info
  const heightInfo = document.querySelector('.services__info');
  heightInfo.style.height = heightInfo.scrollHeight + 'px';

  button.addEventListener('click', () => {
    const servicesCards = document.querySelectorAll('.services__card');
    const currentCard = button.parentNode;
    const currentInfo = currentCard.querySelector('.services__info');
    const isCardOpen = currentCard.classList.contains('services-open');

    //Close all other services info
    servicesCards.forEach((card) => {
      card.classList.replace('services-open', 'services-close');

      const info = card.querySelector('.services__info');
      info.style.height = '0';
    });

    //Open only if not already open
    if (!isCardOpen) {
      currentCard.classList.replace('services-close', 'services-open');
      currentInfo.style.height = currentInfo.scrollHeight + 'px';
    }
  });
});

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/
/* TODO: Implement Testimonials */

/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById("contact-btn");
const copyEmail = document.getElementById("contact-email").textContent;

copyBtn.addEventListener("click", () => {
  //Use the clipboard API to copy text
  navigator.clipboard.writeText(copyEmail).then(() => {
    copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>';

    //Restore the original text after 2 seconds
    setTimeout(() => {
      copyBtn.innerHTML = 'Copy Email <i class="ri-file-copy-line"></i>';
    }, 2000);
  });
});

/*=============== CURRENT YEAR OF THE FOOTER ===============*/
const textYear = document.getElementById('footer-year');
const currentYear = new Date().getFullYear();

//Each year it is updated the current year
textYear.textContent = currentYear;

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  //We get the position by scrolling down
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const id = section.id; //id of each section
    const top = section.offsetTop - 100; //Distance from the top edge
    const height = section.offsetHeight; //Element height
    const link = document.querySelector('.nav__menu a[href*=' + id + ']'); //id nav link

    if (!link) return; //If no link, exit

    link.classList.toggle("active-link", scrollY > top && scrollY <= top + height);
  })
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

// Respect user "reduced motion" preference
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  ScrollReveal().destroy();
}


const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
  //reset:true, //Animations repeat
});

sr.reveal(`.home__image,
   .projects, 
   .work, 
   .contact,
   .services`);



sr.reveal(`.home__data`, { delay: 900, origin: "bottom" });
sr.reveal(`.home__info`, { delay: 1200, origin: "bottom" });
sr.reveal(`.home__social, .home__cv`, { delay: 1500 });


sr.reveal(`.about__data`, { origin: "left" });
sr.reveal(`.about__image`, { origin: "right" });


sr.reveal(`.services__card`, { interval: 100 })
