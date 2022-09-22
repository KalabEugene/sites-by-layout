let idTeam;
let observer1 = new IntersectionObserver((entries) => {
  entries.forEach(function (entry) {
    function shiftHeader() {
      const margin = entry.target.children[0].style.marginLeft;
      const number = margin.replace("px", "");
      const numberAdedd = +number + 3 + "px";
      entry.target.children[0].style.marginLeft = numberAdedd;
      const firstElem = entry.target.children[0];
      const lastElem = entry.target.children[entry.target.children.length - 1];
      if (number >= Math.floor(firstElem.getBoundingClientRect().width)) {
        entry.target.children[0].style.marginLeft = "0px";
        const newTitle = document.createElement("h3");
        newTitle.innerText = "TEAM";
        entry.target.prepend(newTitle);
      } else if (lastElem.getBoundingClientRect().x > window.innerWidth) {
        lastElem.remove();
      }
    }
    if (entry.isIntersecting) {
      id = setInterval(shiftHeader, 20);
    } else {
      clearInterval(id);
    }
  });
});
let teamHeader = document.getElementById("team");
observer1.observe(teamHeader);
