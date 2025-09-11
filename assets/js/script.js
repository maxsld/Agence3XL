document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeInRightElements = document.querySelectorAll(".animate-fade-in");
  const fadeInOpacityElements = document.querySelectorAll(
    ".animate-fade-opacity"
  );
  const delayBetween = 150;

  const handleIntersection = (elements, animationName) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (
            entry.isIntersecting &&
            !entry.target.classList.contains("animated")
          ) {
            entry.target.classList.add("animated");

            setTimeout(() => {
              entry.target.style.animation = `${animationName} 1s ease forwards`;
            }, index * delayBetween);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));
  };

  handleIntersection(fadeInRightElements, "fadeInRightBlur");
  handleIntersection(fadeInOpacityElements, "fadeInOpacity");
});

const logos = [
  "./assets/img/logo-track1.png",
  "./assets/img/logo-track2.png",
  "./assets/img/logo-track3.png",
  "./assets/img/logo-track4.png",
  "./assets/img/logo-track5.png",
  "./assets/img/logo-track6.png",
  "./assets/img/logo-track7.png",
  "./assets/img/logo-track8.png",

];

const track = document.getElementById("logo-track");

for (let i = 0; i < 100; i++) {
  logos.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Logo partenaire";
    track.appendChild(img);
  });
}


const avisLeft = [
  {
    text: "Enregistrer un podcast avec Gérald a été une formidable expérience. Sa bienveillance et son écoute m’ont mise à l’aise dès les premières minutes. On se sent accompagné et valorisé dans son histoire.",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Laura Boisseau",
    desc: "Podcast JAM",
  },
  {
    text: "Une expérience fantastique avec JAM ! Du partage, de la bienveillance et un vrai professionnalisme. Gérald sait créer une atmosphère conviviale tout en menant l’entretien avec sérieux.",
    photo: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Victor Lotz",
    desc: "Podcast JAM",
  },
  {
    text: "J’ai enregistré mon premier podcast avec Gérald et ça a été une expérience incroyable. Il sait écouter, guider et mettre en lumière les bons moments. Un souvenir que je garde précieusement.",
    photo: "https://randomuser.me/api/portraits/women/24.jpg",
    name: "Lina Diaferia",
    desc: "Podcast JAM",
  },
  {
    text: "Je fais partie de la promotion 2 de JAM Academy et j’ai reçu un super accueil. L’énergie et l’esprit collectif sont au rendez-vous, ça booste la confiance et la créativité. Une aventure unique.",
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Lancelot Bertrand",
    desc: "JAM Academy",
  },
  {
    text: "Gérald est un grand professionnel qui sait mettre en lumière des parcours inspirants. Son expérience et son approche humaine transforment chaque podcast en moment unique et riche de sens.",
    photo: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "Florent Pappada",
    desc: "Podcast JAM",
  },
];

const avisRight = [
  {
    text: "Pas facile de se lancer dans un premier podcast… et pourtant, avec JAM, tout devient simple. Gérald met en confiance, explique chaque étape et transforme l’exercice en un moment fluide et agréable.",
    photo: "https://randomuser.me/api/portraits/women/19.jpg",
    name: "Nelly Rousseau",
    desc: "Podcast JAM",
  },
  {
    text: "Un podcast merveilleux mené par Gérald. Sa voix, son énergie et son charisme donnent un rythme captivant à l’entretien. On ressort grandi de cette expérience unique.",
    photo: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Alexandra Jover",
    desc: "Podcast JAM",
  },
  {
    text: "Participer à JAM a été une expérience unique. J’ai eu l’impression de faire un point sur ma vie tout en me projetant dans l’avenir. Gérald mène l’entretien avec une simplicité déconcertante.",
    photo: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Frédéric Chevalier",
    desc: "Podcast JAM",
  },
  {
    text: "JAM, c’est des rencontres, des belles énergies et un esprit de partage. Chaque échange est sincère et porteur de sens. Merci pour cette aventure humaine.",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
    name: "Jerome K-Talent",
    desc: "JAM Academy",
  },
  {
    text: "Je n’aurais jamais pensé enregistrer un podcast, et pourtant… Avec Gérald, tout paraît naturel. Il accompagne, rassure et transforme l’entretien en un moment riche et inspirant.",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Elise Maisse",
    desc: "Podcast JAM",
  },
];


const trackLeft = document.getElementById("track-left");
const trackRight = document.getElementById("track-right");

for (let i = 0; i < 10; i++) {
  avisLeft.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("avis-card");
    div.innerHTML = `
      <p>${item.text}</p>
      <div class="avis-author">
        <img src="${item.photo}" alt="${item.name}" class="avis-photo">
        <div class="avis-info">
          <div class="avis-name">${item.name}</div>
          <div class="avis-description">${item.desc}</div>
        </div>
      </div>
    `;
    trackLeft.appendChild(div);
  });
}

for (let i = 0; i < 10; i++) {
  avisRight.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("avis-card");
    div.innerHTML = `
      <p>${item.text}</p>
      <div class="avis-author">
        <img src="${item.photo}" alt="${item.name}" class="avis-photo">
        <div class="avis-info">
          <div class="avis-name">${item.name}</div>
          <div class="avis-description">${item.desc}</div>
        </div>
      </div>
    `;
    trackRight.appendChild(div);
  });
}


document.querySelectorAll(".faq-question").forEach((q) => {
  q.addEventListener("click", () => {
    const item = q.parentElement;
    item.classList.toggle("active");
  });
});

  const cards = document.querySelectorAll(".scroll-card");

  window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top -10;

      // Différence entre le centre de l'écran et le centre de la carte
      const diff = cardCenter - windowHeight / 2;

      // Inclinaison max
      const maxTilt = 35; 

      // Calcul : plus diff est proche de 0, plus on est plat
      let tilt = diff / 5;

      // Clamp côté positif (si en dessous → reste plat)
      if (tilt < 0) tilt = 0;

      // Clamp côté négatif (si trop incliné en haut)
      if (tilt > maxTilt) tilt = maxTilt;

      // Appliquer la rotation
      card.style.transform = `perspective(1000px) rotateX(${tilt}deg)`;
    });
  });