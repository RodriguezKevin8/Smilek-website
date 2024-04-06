import ScrollReveal from "scrollreveal";

const scrollReveal = ScrollReveal();

scrollReveal.reveal(".first", {
  duration: 2000,
  scale: 0.85,
  distance: "85 px",
  origin: "bottom",
  easing: "ease-out",
});

scrollReveal.reveal(".efect", {
  origin: "top",
  distance: "85px",
  duration: 2500,
  reset: false,
});
