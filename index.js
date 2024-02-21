const navigation = document.querySelector(".first-Part");
const logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {
  let scroll = (window.scrollY + innerHeight) / document.body.offsetHeight;
  console.log(scroll);
  if (scroll > 0.31) {
    navigation.style.height = "90px";
    logo.style.opacity="1";
  } else {
    navigation.style.height = "50px";
  }
  if (scroll > 0.17) {
     premier.style.color = "#fc484b";
  }
  
  if (scroll > 0.30) {
    deuxieme.style.color = " #fc484b";
    premier.style.color = "#22244d";
  } else {
    deuxieme.style.color = " #22244d";
  }

  if (scroll > 0.78) {
    troisieme.style.color = " #fc484b";
    deuxieme.style.color = "#22244d";
  } else {
    troisieme.style.color = "#22244d";
  }
});
