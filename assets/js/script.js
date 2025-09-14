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

// ✅ Avis clients avec option drapeau
const avisLeft = [
  {
    text: "Nous travaillons ensemble depuis quelques années sur des projets ambitieux, orientés éducation et people management. Gérald sait s’adapter quel que soit le type de client, sa nationalité, et sa culture. Je recommande à 100%.",
    photo: "assets/img/profiles/aida.jpeg",
    name: "Aida Berger",
    desc: "Brooklyn",
    flagImg: "assets/img/us-flag.png"
  },
  {
    text: "Grace à Gérald, j’ai pu prendre la parole, enregistrer un podcast JAM, et partager mon parcours et sa passion. Toujours un mot gentil et des encouragements, il dégage une énergie positive qui fait du bien et qui est contagieuse.",
    photo: "assets/img/profiles/laura.jpeg",
    name: "Laura Boisseau",
    desc: "JAM"
  },
  {
    text: "En participant à JAM, j’ai découvert une autre manière de m’exprimer et de partager mon parcours. Une aventure humaine riche en émotions.",
    photo: "assets/img/profiles/maxens.jpeg",
    name: "Maxens Soldan",
    desc: "JAM"
  }
];

const avisRight = [
  {
    text: "Gérald à rejoint notre équipe pendant quelques mois pour nous accompagner dans notre développement. Très structuré, toujours positif et plein d’énergie, il a su trouver des solutions. Bravo à lui !",
    photo: "assets/img/profiles/daniel.jpeg",
    name: "Daniel Oliveira",
    desc: "Brooklyn"
  },
  {
    text: "Grâce à Serial Mentor, j’ai pu clarifier mes objectifs et bâtir une stratégie de communication efficace. Gérald m’a guidé avec écoute et précision.",
    photo: "assets/img/profiles/evan.jpeg",
    name: "Evan Rolland",
    desc: "Serial Mentor"
  },
  {
    text: "J’ai fait la connaissance de Gérald lors d’un cours de marketing. Il a su être à mon écoute et ma accompagné à titre personnel pour m’aider dans mes choix. Aujourd’hui, je travaille dans une grande marque de sport. Merci à lui",
    photo: "assets/img/profiles/lenny.jpeg",
    name: "Lenny Vollet",
    desc: "Serial Mentor"
  },
  {
    text: "Nous avons fait appel à Gérald avec pour mission de rebooster une équipe internationale. Il a fait l’unanimité et a permis d’obtenir des résultats concrets et durables. Son côté humain a fait la différence",
    photo: "assets/img/profiles/hugo.jpeg",
    name: "Hugo Roche",
    desc: "Brooklyn",
    flagImg: "assets/img/ch-flag.png"
  },
  {
    text: "Energie et charisme sont les deux premières qualités de Gérald. J’ai rejoint rapidement la JAMacadémy pour vivre une expérience unique et innovante. Son parcours est très inspirant, j’en ressort grandi.",
    photo: "assets/img/profiles/victor.jpeg",
    name: "Victor Lotz",
    desc: "JAM"
  }
];

// ✅ Sélecteurs des carrousels
const trackLeft = document.getElementById("track-left");
const trackRight = document.getElementById("track-right");

// ✅ Fonction pour créer une card
function createAvisCard(item) {
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

  // Ajouter banderole drapeau si défini
  if(item.flagImg) {
    const flagDiv = document.createElement("div");
    flagDiv.classList.add("flag-banner");
    flagDiv.style.backgroundImage = `url(${item.flagImg})`;
    div.appendChild(flagDiv);
  }

  return div;
}

// ✅ Ajouter les avis dans le carrousel (répété 10x pour effet)
for (let i = 0; i < 10; i++) {
  avisLeft.forEach(item => trackLeft.appendChild(createAvisCard(item)));
  avisRight.forEach(item => trackRight.appendChild(createAvisCard(item)));
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

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.top - 10;

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
