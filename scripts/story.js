const getMenuList = document.getElementsByClassName("story__list")[0];
const getStoryBlock = document.getElementsByClassName("story__info");

getMenuList.addEventListener("click", (event) => {
  const index = [...getMenuList.children].findIndex(
    (item) => item.innerHTML === event.target.innerHTML
  );
  const activeMenu = [...getMenuList.children].findIndex(
    (item) => item.classList.value === "activate__story"
  );

  getMenuList.children[activeMenu].classList.remove("activate__story");
  getMenuList.children[index].classList.add("activate__story");

  const activeBlock = [...getStoryBlock]
    .map((item) => (item.classList.value.includes("hide") ? false : true))
    .indexOf(true);
  getStoryBlock[activeBlock].classList.add("hide");
  getStoryBlock[index].classList.remove("hide");
});
