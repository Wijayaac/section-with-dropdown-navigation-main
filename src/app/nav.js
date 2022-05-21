class HeaderNavigation {
  init() {
    this.MobileToggle();
  }

  MobileToggle() {
    const primaryNav = document.querySelector("#primary-navigation");
    const navToggle = document.querySelector(".header__toggle.header--mobile");

    navToggle.addEventListener("click", () => {
      const visibility = primaryNav.getAttribute("data-visible");
      if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
      } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
      }
    });
  }
}

export default HeaderNavigation;
