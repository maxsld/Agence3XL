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

const avisLeft = [
  {
    text: "J’ai enregistré mon premier podcast avec Gérald et ça a été une expérience incroyable. Il sait écouter, guider et mettre en lumière les bons moments. Un souvenir que je garde précieusement.",
    photo: "/assets/img/profiles/aida.jpeg",
    name: "Aida Berger",
    desc: "Brooklyn",
  },
  {
    text: "Participer à JAM a été une expérience unique. J’ai eu l’impression de faire un point sur ma vie tout en me projetant dans l’avenir. Gérald mène l’entretien avec une simplicité déconcertante.",
    photo: "/assets/img/profiles/hugo-r.jpeg",
    name: "Hugo Roche",
    desc: "Brooklyn",
  },
  {
    text: "Enregistrer un podcast avec Gérald a été une formidable expérience. Sa bienveillance et son écoute m’ont mise à l’aise dès les premières minutes. On se sent accompagné et valorisé dans son histoire.",
    photo: "/assets/img/profiles/laura.jpeg",
    name: "Laura Boisseau",
    desc: "JAM",
  },
  {
    text: "En participant à JAM, j’ai découvert une autre manière de m’exprimer et de partager mon parcours. Une aventure humaine riche en émotions.",
    photo: "/assets/img/profiles/maxens.jpeg",
    name: "Maxens Soldan",
    desc: "JAM",
  },
];

const avisRight = [
  {
    text: "Brooklyn m’a permis de prendre du recul stratégique et de passer à l’action avec méthode. Gérald m’a challengé tout en gardant une approche humaine et bienveillante.",
    photo: "/assets/img/profiles/daniel.jpeg",
    name: "Daniel Oliveira",
    desc: "Brooklyn",
  },
  {
    text: "Serial Mentor m’a donné les clés pour développer mon leadership et avancer concrètement sur mes projets. Un vrai tremplin pour passer à l’action.",
    photo: "/assets/img/profiles/evan.jpeg",
    name: "Evan Rolland",
    desc: "Serial Mentor",
  },
  {
    text: "Grâce à Serial Mentor, j’ai pu clarifier mes objectifs et trouver une direction qui me correspond. Gérald m’a guidé avec écoute et précision.",
    photo: "/assets/img/profiles/lenny.jpeg",
    name: "Lenny Vollet",
    desc: "Serial Mentor",
  },
  {
    text: "Serial Mentor m’a permis de gagner en confiance et d’oser me lancer dans mes projets. Un accompagnement motivant et inspirant.",
    photo: "/assets/img/profiles/hugo.jpeg",
    name: "Hugo Real",
    desc: "Serial Mentor",
  },
  {
    text: "Une expérience fantastique avec JAM ! Du partage, de la bienveillance et un vrai professionnalisme. Gérald sait créer une atmosphère conviviale tout en menant l’entretien avec sérieux.",
    photo: "/assets/img/profiles/victor.jpeg",
    name: "Victor Lotz",
    desc: "JAM",
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
