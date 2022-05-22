import HeaderNavigation from "./nav";

// Init navigation script
const navigation = new HeaderNavigation();
navigation.init();

const submenuToggles = document.querySelectorAll(".header__nav-toggle");

submenuToggles.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    e.preventDefault();
    let parentSubmenu = elm.parentNode.parentNode,
      dataToggleBtn = elm.getAttribute("data-toggle"),
      submenuWrapper = parentSubmenu.querySelector(`#${dataToggleBtn}`),
      submenuChilds = submenuWrapper.querySelectorAll(
        ".header__nav-item--submenu"
      ),
      totalHeight = 0;
    submenuChilds.forEach((elm) => {
      totalHeight += elm.getBoundingClientRect().height;
    });
    if (submenuWrapper.getAttribute("data-visible") == "false") {
      submenuWrapper.setAttribute("data-visible", true);
      elm.setAttribute("aria-expanded", true);
      submenuWrapper.style.height = `${totalHeight}px`;
    } else {
      submenuWrapper.setAttribute("data-visible", false);
      elm.setAttribute("aria-expanded", false);
      submenuWrapper.style.height = 0;
    }
  });
});
