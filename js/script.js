function createCard({ subtitle, title, text, author, date, datetime, image }) {
  const card = document.createElement("div");
  card.className = "content__card card";

  card.innerHTML = `
      <a class="content__card-link" href="#">
        <img src="${image}" alt="card image" />
      </a>
      <div class="content__card-info">
        <p class="content__card-subtitle">${subtitle}</p>
        <h2 class="content__card-title">${title}</h2>
        <p class="content__card-text">${text}</p>
        <div class="content__card-meta">
          <cite class="content__card-cite">${author}</cite>
          <time class="content__card-time" datetime="${datetime}">${date}</time>
        </div>
      </div>
    `;

  return card;
}

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const cardBox = document.querySelector(".content__card-box");
    data.forEach((item) => {
      const card = createCard(item);
      cardBox.appendChild(card);
    });
  });

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition <= 80) {
    header.classList.remove("hidden");
  }

  if (scrollPosition > 80) {
    header.classList.add("hidden");
  }
});

const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = toggleBtn.querySelector("svg");
const body = document.body;

const moonSVG =
  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />';
const sunSVG =
  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';

themeIcon.innerHTML = moonSVG;
themeIcon.setAttribute("stroke", "#686868");

toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    themeIcon.innerHTML = moonSVG;
    themeIcon.setAttribute("stroke", "#686868");
  } else {
    body.classList.add("dark-theme");
    themeIcon.innerHTML = sunSVG;
    themeIcon.setAttribute("stroke", "white");
  }
});
