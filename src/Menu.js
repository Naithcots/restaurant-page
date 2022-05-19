import Container from "./Container";
import MenuItem from "./components/MenuItem";

const menuItemArr = [
  {
    name: "Margherita",
    ingredients: ["cheese", "tomato sauce"],
    src: `./assets/ivan-torres-MQUqbmszGGM-unsplash.jpg`,
  },
  {
    name: "Salami",
    ingredients: ["cheese", "salami", "tomato sauce"],
    src: "./assets/alan-hardman-SU1LFoeEUkk-unsplash.jpg",
  },
];

const Menu = () => {
  const element = document.createElement("div");
  element.classList.add("box");
  const menuContainer = Container();
  element.appendChild(menuContainer);

  const menuHeader = document.createElement("h1");
  menuHeader.classList.add("box__header");
  menuHeader.textContent = "Our Menu";

  const menuParagraph = document.createElement("p");
  menuParagraph.classList.add("box__paragraph");
  menuParagraph.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
  unde adipisci? Nam veniam aut sit ipsam omnis? Ratione, ipsa
  mollitia? Aliquid ex tempore deleniti, et dicta vero atque eaque
  tenetur! Rem, eaque labore voluptate itaque nam nisi sunt officia
  natus aliquid. Deserunt minus aut, doloremque possimus maiores,
  totam officia sit perferendis laboriosam autem ducimus fugiat
  consectetur, sint quos mollitia debitis? Ipsa eligendi fugiat
  dolores fuga, expedita nostrum iure!`;

  menuContainer.appendChild(menuHeader);
  menuContainer.appendChild(menuParagraph);

  menuItemArr.forEach((e) => {
    const element = MenuItem(e);
    menuContainer.appendChild(element);
  });

  return element;
};

export default Menu;
