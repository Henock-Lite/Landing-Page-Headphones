const navigation = document.querySelector(".first-Part");

window.addEventListener("scroll", () => {
  let scroll = (window.scrollY + innerHeight) / document.body.offsetHeight;
  console.log(scroll);
  if (scroll > 0.47) {
    navigation.style.height = "90px";
  } else {
    navigation.style.height = "50px";
  }

  if (scroll > 0.47) {
    deuxieme.style.color = " #fc484b";
  } else {
    deuxieme.style.color = " #22244d";
  }

  if (scroll > 0.47) {
    premier.style.color = " #22244d";
  } else {
    premier.style.color = " #fc484b";
  }

  if (scroll > 0.78) {
    troisieme.style.color = " #fc484b";
    deuxieme.style.color = "#22244d";
  }
  else {
    troisieme.style.color = "#22244d";
    
  }
});
