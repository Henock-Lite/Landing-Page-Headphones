const navigation = document.querySelector(".first-Part");
const logo = document.querySelector(".logo");
const title = document.querySelector(".title-product >h2");
const titre = document.querySelector(".title-product >h3");
const carte = document.querySelectorAll(".one");
const pan = document.querySelector(".bleu");

window.addEventListener("scroll", () => {
  let scroll = (window.scrollY + innerHeight) / document.body.offsetHeight;
  console.log(scroll);
  if (scroll > 0.31) {
    navigation.style.height = "90px";

    logo.style.opacity = "1";
  } else {
    navigation.style.height = "50px";
  }
  if (scroll > 0.17) {
    premier.style.color = "#fc484b";
  }
  if (scroll > 0.3) {
    deuxieme.style.color = " #fc484b";
    premier.style.color = "#22244d";
  } else {
    deuxieme.style.color = " #22244d";
  }
  if (scroll > 0.73) {
    troisieme.style.color = " #fc484b";
    deuxieme.style.color = "#22244d";
    title.style.transform = "translateX(0)";
  } else {
    troisieme.style.color = "#22244d";
  }

  if (scroll > 0.84) {
    titre.style.transform = "translateX(0)";
  }
});
carte.forEach((cart) => {
  const pan = cart.querySelector(".bleu");
  cart.addEventListener("mouseover", () => {
    pan.style.opacity = "1";
  });
});
