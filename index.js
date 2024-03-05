const navigation = document.querySelector(".first-Part");
const logo = document.querySelector(".logo");
const title = document.querySelector(".title-product >h2");
const titre = document.querySelector(".title-product >h3");
const carte = document.querySelectorAll(".one");
const newsletter = document.querySelector(".pub");
const pan = document.querySelector(".bleu");
const contNew = document.querySelector(".cont-news");
let playonce = true;

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
  if (scroll > 0.61) {
    troisieme.style.color = " #fc484b";
    deuxieme.style.color = "#22244d";
    title.style.transition = ".7s ease";
    title.style.transform = "translateX(0)";
  } else {
    troisieme.style.color = "#22244d";
  }
  if (scroll > 0.7) {
    titre.style.transition = ".7s ease";
    titre.style.transform = "translateX(0)";
  }

   if (scroll > 0.89) {
     quatrieme.style.color = " #fc484b";
     troisieme.style.color = "#22244d";
     
   } else {
     quatrieme.style.color = "#22244d";
   }

  if (scroll > 0.95) {
    navigation.style.top = "-300px";
  } else {
      navigation.style.top = "0px";
  }
  if ((scroll > 1.0) & playonce) {
    newsletter.style.left = "50%";
    playonce = false;
    contNew.style.opacity = "0.4";
    contNew.style.pointerEvents = "none";
    document.body.style.overflow = "hidden";
  }
});

closeBtn.addEventListener("click", () => {
  newsletter.style.left = "-500px";
  document.body.style.overflow = "auto";
  contNew.style.opacity = "1";
  contNew.style.pointerEvents = "visible";
});

mss.addEventListener("click", () => {
  newsletter.style.left = "-500px";
  document.body.style.overflow = "auto";
  contNew.style.opacity = "1";
  contNew.style.pointerEvents = "visible";
});

carte.forEach((cart) => {
  const pan = cart.querySelector(".bleu");
  cart.addEventListener("mouseover", () => {
    pan.style.opacity = "1";
  });
});
