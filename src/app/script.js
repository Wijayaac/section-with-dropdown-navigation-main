import HeaderNavigation from "./nav";

// Init navigation script
const navigation = new HeaderNavigation();
navigation.init();

const submenuToggles = document.querySelectorAll(".header__nav-toggle");

submenuToggles.forEach((elm) => {
  console.log(elm);
});
