class SubmenuToggle {
  constructor() {
    this.submenuToggles = document.querySelectorAll(".header__nav-toggle");
    this.menuElms = document.querySelectorAll(".header__nav-item--primary");
    this.windowWidth = window.innerWidth;

    if (this.windowWidth < 992) {
      this.openSubmenu();
    } else {
      this.hoverSubmenu();
    }
  }
  openSubmenu() {
    this.menuElms.forEach((elm) => {
      let submenuToggle = elm.querySelector(".header__nav-toggle");
      if (submenuToggle) {
        elm.addEventListener("click", (e) => {
          e.preventDefault();

          this.toggling(elm);
        });
      }
    });
  }

  hoverSubmenu() {
    this.menuElms.forEach((elm) => {
      let submenuToggle = elm.querySelector(".header__nav-toggle");

      if (submenuToggle) {
        elm.addEventListener("mouseenter", () => {
          this.toggling(elm);
        });

        elm.addEventListener("mouseleave", () => {
          this.toggling(elm);
        });
      }
    });
  }
  toggling(elm) {
    let parentSubmenu = elm.parentNode.parentNode,
      submenuToggle = elm.querySelector(".header__nav-toggle"),
      dataToggleBtn =
        elm.getAttribute("data-toggle") ||
        submenuToggle.getAttribute("data-toggle"),
      submenuWrapper = parentSubmenu.querySelector(`#${dataToggleBtn}`),
      submenuChilds = submenuWrapper.querySelectorAll(
        ".header__nav-item--submenu"
      ),
      totalHeight = 0,
      totalChild = 0;

    submenuChilds.forEach((elm) => {
      totalHeight += elm.getBoundingClientRect().height;
      totalChild++;
    });
    if (this.windowWidth > 992 && totalChild > 3) {
      totalHeight += 65;
    } else {
      totalHeight += 35;
    }

    if (submenuWrapper.getAttribute("data-visible") == "false") {
      submenuWrapper.setAttribute("data-visible", true);
      // elm.setAttribute("aria-expanded", true);
      submenuToggle.setAttribute("aria-expanded", true);
      submenuWrapper.style.height = `${totalHeight}px`;
    } else {
      submenuWrapper.setAttribute("data-visible", false);
      // elm.setAttribute("aria-expanded", false);
      submenuToggle.setAttribute("aria-expanded", false);
      submenuWrapper.style.height = 0;
    }
  }
}

export default SubmenuToggle;
