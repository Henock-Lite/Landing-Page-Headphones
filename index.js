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

  if (scroll > 1.0) {
    bg.style.background = "#171933";
    // bg.style.color = "#d4dcff";
  } else {
    bg.style.background = " #e1edf4";
    // bg.style.color = "black";
  }
});
