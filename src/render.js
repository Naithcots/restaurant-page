import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import Container from "./Container";
import ListItem from "./components/ListItem";

const content = document.querySelector("#content");

const Header = () => {
  const element = document.createElement("header");
  element.classList.add("header");

  const headerContainer = Container();
  element.appendChild(headerContainer);

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");

  const logoLink = document.createElement("a");
  logoLink.classList.add("logo-container__link");
  logoLink.href = "/";

  const logoTitle = document.createElement("h1");
  logoTitle.classList.add("logo-container__title");
  logoTitle.innerText = "restaurant-page";

  logoContainer.appendChild(logoLink);
  logoLink.appendChild(logoTitle);

  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const navUl = document.createElement("ul");
  navUl.classList.add("nav__ul");

  navLiArr.forEach((el) => {
    const element = ListItem(el, "nav__ul__li");
    navUl.appendChild(element);
  });

  [...navUl.children].forEach((e) => {
    e.addEventListener("click", (e) => {
      const href = e.target.textContent;
      console.log(href);
      content.innerHTML = "";
      render(href);
    });
  });

  nav.appendChild(navUl);

  headerContainer.appendChild(logoContainer);
  headerContainer.appendChild(nav);

  return element;
};

const navLiArr = ["Home", "Menu", "Contact"];

const Main = (componentName) => {
  const element = document.createElement("main");
  element.classList.add("main");

  if (!componentName) element.appendChild(Home());
  else {
    if (componentName === "Home") element.appendChild(Home());
    else if (componentName === "Menu") element.appendChild(Menu());
    else if (componentName === "Contact") element.appendChild(Contact());
  }

  return element;
};

const render = (componentName) => {
  content.appendChild(Header());
  content.appendChild(Main(componentName));
  //   content.appendChild(Home());
  //   content.appendChild(Menu());
  //   content.appendChild(Contact());
};

export default render;
