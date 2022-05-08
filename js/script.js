    // Header burger

document.querySelector(".header-top-burger__btn--open").addEventListener("click", function() {
  document.querySelector(".header-top-nav").classList.add("header-top-nav--active");
})
document.querySelector(".header-top-burger__btn--close").addEventListener("click", function() {
  document.querySelector(".header-top-nav").classList.remove("header-top-nav--active");
})

    // Header search

document.querySelector(".header-top-search__btn--open").addEventListener("click", function() {
  document.querySelector(".header-top-search__form").classList.add("header-top-search__form--active");
  this.classList.add("active");
})
document.querySelector(".header-top-search__btn--close").addEventListener("click", function() {
  document.querySelector(".header-top-search__form").classList.remove("header-top-search__form--active");
  document.querySelector(".header-top-search__btn--open").classList.remove("active");
})
document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header-top-search__form");
  if (!target.closest(".header-top-search")) {
  form.classList.remove("header-top-search__form--active");
    form.querySelector("input").value = "";
    document.querySelector(".header-top-search__btn--open").classList.remove("active")
  }
})

    // Header dropdown-menu

  document.querySelectorAll(".header-bottim-nav__btn").forEach(el => {
    el.setAttribute("aria-expanded", "false");
  });
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".header-bottom-nav__btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header-bottom-nav--dropdown");
      document.querySelectorAll(".header-bottom-nav__btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("active-nav__btn");
          el.setAttribute("aria-expanded", "false");
        }
      });
      document.querySelectorAll(".header-bottom-nav--dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-dropdown__list");
        }
      })
      dropdown.classList.toggle("active-dropdown__list");
      btn.classList.toggle("active-nav__btn")
      if (btn.getAttribute("aria-expanded") === "false") {
        btn.setAttribute("aria-expanded", "true");
      } else {
        btn.setAttribute("aria-expanded", "false");
      }
    })
  })
  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header-bottom-nav__list")) {
      document.querySelectorAll(".header-bottom-nav--dropdown").forEach(el => {
        el.classList.remove("active-dropdown__list");
      })
      document.querySelectorAll(".header-bottom-nav__btn").forEach(el => {
        el.classList.remove("active-nav__btn");
        el.setAttribute("aria-expanded", "false");
      });
    }
  })
  })
    // Header dropdown-menu custom scroll

document.querySelectorAll(".header-bottom-nav--dropdown__list").forEach(item => {
  new SimpleBar(item, {
//   /* чтобы изначально ползунок был виден */
  autoHide: false,
//   /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 28,
});
})
    // Hero slider

const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
})

    // Gallary custom select

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
});

    // Gallary slider

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".slides-container", {
    speed: 400,
    slidesPerView: 1,
    direction: 'horizontal',
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallary .slider-nav__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallary-nav__btn--next",
      prevEl: ".gallary-nav__btn--prev",
      slideClass: ".gallary-slide",
      disabledClass: 'gallary-nav__btn--disabled',
    },
    breakpoints: {
      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 38
      },
      1024: {
        slidesPerGroup: 3,
        slidesPerView: 2,
        spaceBetween: 34
      },
      1440: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 50
      }
    },
    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "gallary-slide-visible",
    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("gallary-slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("gallary-slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});

    // Gallary modal

const modal = new Modal({
});

    // Catalog accordion

  new Accordion(".js-accordion-container", {
    duration: 400,
    openOnInit: [0]
  });
  document.querySelectorAll('.js-tab-link').forEach(function(tabsLink){
    tabsLink.addEventListener('click', function(e){
      const tabsPath = e.currentTarget.dataset.tabsPath;
      document.querySelectorAll('.js-tab-link').forEach(function(btn){
  btn.classList.remove('js-tab-link--active')});
    e.currentTarget.classList.add('js-tab-link--active');
    document.querySelectorAll('.js-tabs-item').forEach(function(tabsBtn){
  tabsBtn.classList.remove('js-tabs-item--active')});
  document.querySelector(`[data-tabs-target="${tabsPath}"]`).classList.add('js-tabs-item--active');
    });
  });

    // Events slider

  let swiperEvents = new Swiper('.events__swiper', {
    slideLabelMessage: false,
    loop: false,
    speed: 400,
    grid: {
      rows: 1,
      fill: "row"
    },
    pagination: {
      el: '.event__pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 34,
        },
        1024: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 27,
        },
        1440: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 50,
        }
    },
    navigation: {
      nextEl: '.events-nav__btn--next',
      prevEl: '.events-nav__btn--prev',
      disabledClass: 'events-nav__btn--disable',
    },
    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "events-slide-visible",
    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("events-slide-visible")) {
            slide.querySelector(".events-card-bottom__link").tabIndex = "-1";
          } else {
            slide.querySelector(".events-card-bottom__link").tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("events-slide-visible")) {
            slide.querySelector(".events-card-bottom__link").tabIndex = "-1";
          } else {
            slide.querySelector(".events-card-bottom__link").tabIndex = "";
          }
        });
      }
    }
  });


    // Projects tooltip

tippy('.js-tooltip-btn', {
  maxWidth: 264,
  duration: 200,
  theme: 'projects-tooltip-theme',
  trigger: 'click',
});

    // Projects slider

document.addEventListener("DOMContentLoaded", () => {
  let projectSlider = new Swiper(".projects__swiper", {
    speed: 400,
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 50,
    navigation: {
      nextEl: ".projects-nav__btn--next",
      prevEl: ".projects-nav__btn--prev",
      disabledClass: 'projects-nav__btn--disable',
      slideClass: ".projects-card__link",
    },
    breakpoints: {
      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 34
      },
      1024: {
        slidesPerGroup: 3,
        slidesPerView: 2,
        spaceBetween: 50
      },
      1440: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 50
      }
    },
    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "projects-slide-visible",
    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("projects-slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("projects-slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});

    // Projects masked and validation form

const form = document.querySelector('.contacts-top__form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);
const validation = new JustValidate('.contacts-top__form',
  {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-label-invalid',
    focusInvalidField: true,
    lockForm: true,
  },
);
validation
  .addField('.js-input--name', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите своё имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Cлишком короткое имя',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Cлишком длинное имя',
    },
    {
      rule: 'customRegexp',
      value: /^[а-яА-ЯёЁa-zA-Z]+$/,
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('.js-input--tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите номер телефона',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Номер телефона не полный',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    // Contacts form php-mailer

let formData = new FormData(event.target);
console.log(...formData);
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log('Отправлено');
    }
  }
}
xhr.open('POST', 'mail.php', true);
xhr.send(formData);
event.target.reset();
});

    // Projects map

  ymaps.ready(init);
  function init() {
    const mapElem = document.querySelector('#map');
    const myMap = new ymaps.Map(
      "map",
      {
        center: [55.760216, 37.614770],
        zoom: 14,
        controls: ['geolocationControl', 'zoomControl']
      },
      {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition:  { top: "371px", right: "20px" },
        geolocationControlFloat: 'none',
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: { top: "295px", right: "20px" }
      }
    );
    myMap.behaviors.disable('scrollZoom');
    const myPlacemark = new ymaps.Placemark(
      [55.760216, 37.614770],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/contacts-placemark__icon.svg",
        iconImageSize: [20, 20],
      }
    );
    myMap.geoObjects.add(myPlacemark);
    myMap.container.fitToViewport();
  }

    // Smooth scroll

document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
  });
})

    // Catalog scroll only mobile

const MOBILE_WIDTH = 580;
	function getWindowWidth () {
	  return Math.max(
	    document.body.scrollWidth,
	    document.documentElement.scrollWidth,
	    document.body.offsetWidth,
	    document.documentElement.offsetWidth,
	    document.body.clientWidth,
	    document.documentElement.clientWidth
	  );
	}
	function scrollToContent (link, isMobile) {
		if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
			return;
		}
	  const href = link.getAttribute('href').substring(1);
	  const scrollTarget = document.getElementById(href);
	  const elementPosition = scrollTarget.getBoundingClientRect().top;
	  window.scrollBy({
	      top: elementPosition - 50,
	      behavior: 'smooth'
	  });
	}
	document.querySelectorAll('.js-scroll-link--mobile').forEach(link => {
	  link.addEventListener('click', function(e) {
	      e.preventDefault();
	      scrollToContent(this, true);
	  });
	});
