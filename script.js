$(document).ready(function () {
  $("#preloader").fadeOut("slow");

  AOS.init({
    easing: "ease-out-back",
    duration: 500,
  });
});

// fancy box
Fancybox.bind("[data-fancybox]", {
  caption: (fancybox, slide) => {
    const title = slide.title || `slide ${slide.index}`;
    const desc = slide.des || `description ${slide.index}`;

    return `${slide.index + 1} / ${
      fancybox.carousel?.slides.length
    } <br> ${title} <br> ${desc}`;
  },
});

// navbar link activated
function navBtn(sltr) {
  let navLink = document.getElementsByClassName("nav-link");

  // button style eraser
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].style.borderBottom = "";
    navLink[i].style.fontWeight = "";
    navLink[i].style.color = "";
  }

  // button style changer
  sltr.style.borderBottom = "2px solid #fff";
  sltr.style.fontWeight = "600";
  sltr.style.color = "#fff";
}
// button active default
document.getElementById("activeDf").click();

// responsive hp scroll
const screnHp = screen.width;
if (screnHp <= 576) {
  document.body.style.overflowY = "scroll";
}
