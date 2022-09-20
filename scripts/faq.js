const faqBlock = document.getElementById("faq");
faqBlock.addEventListener("click", function check(event) {
  const appearBlock = event.target.parentElement.parentElement.children[1];
  const arrow = event.target.parentElement.parentElement.children[0].children[1];
  if (appearBlock.classList.value.includes("hide")) {
    appearBlock.classList.remove("hide");
    arrow.classList.add('rotate180')
  } else {
    appearBlock.classList.add("hide");
    arrow.classList.remove('rotate180')
  }
});
