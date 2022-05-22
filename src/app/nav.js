class HeaderNavigation {
  init() {
    this.MobileToggle();
  }

  MobileToggle() {
    const primaryNav = document.querySelector("#primary-navigation"),
      navToggle = document.querySelector(".header__toggle.header--mobile"),
      bodyElm = document.body;
    console.log(bodyElm);
    navToggle.addEventListener("click", () => {
      const visibility = primaryNav.getAttribute("data-visible");
      if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        bodyElm.classList.toggle("body--overlay");
      } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        bodyElm.classList.toggle("body--overlay");
      }
    });
  }
}

export default HeaderNavigation;
