const IconMenu = document.querySelector(".menu__icon")
const menuBody = document.querySelector(".header__acc")
if (IconMenu) {
  IconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock")
    IconMenu.classList.toggle("_active")
    menuBody.classList.toggle("_active")
  })
}
