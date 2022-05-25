class HeaderNavigation {
  constructor() {
    this.primaryNav = document.querySelector("#primary-navigation");
    this.navToggle = document.querySelector(".header__toggle.header--mobile");
    this.bodyElm = document.body;
    this.windowWidth = window.innerWidth;

    if (this.windowWidth < 992) {
      this.MobileToggle();
    }
  }

  MobileToggle() {
    this.navToggle.addEventListener("click", () => {
      let visibility = this.primaryNav.getAttribute("data-visible");
      if (visibility === "false") {
        this.primaryNav.setAttribute("data-visible", true);
        this.navToggle.setAttribute("aria-expanded", true);
        this.bodyElm.classList.toggle("body--overlay");
      } else {
        this.primaryNav.setAttribute("data-visible", false);
        this.navToggle.setAttribute("aria-expanded", false);
        this.bodyElm.classList.toggle("body--overlay");
      }
    });
  }
}

export default HeaderNavigation;
