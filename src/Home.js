import Container from "./Container";
import ListItem from "./components/ListItem";


const openingHours = [
  "Monday: 10am - 9pm",
  "Tuesday: 10am - 9pm",
  "Wednesday: 10am - 9pm",
  "Thursday: 10am - 9pm",
  "Friday: 10am - 10pm",
  "Saturday: 10am - 10pm",
  "Sunday: closed",
];

const Home = () => {
  const element = document.createElement("div");
  element.classList.add("box");
  const homeContainer = Container();
  element.appendChild(homeContainer);

  const homeHeader = document.createElement("h1");
  homeHeader.classList.add("box__header");
  homeHeader.textContent = "Welcome to restaurant-page!";

  const homeParagraph = document.createElement("p");
  homeParagraph.classList.add("box__paragraph");
  homeParagraph.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
  unde adipisci? Nam veniam aut sit ipsam omnis? Ratione, ipsa
  mollitia? Aliquid ex tempore deleniti, et dicta vero atque eaque
  tenetur! Rem, eaque labore voluptate itaque nam nisi sunt officia
  natus aliquid. Deserunt minus aut, doloremque possimus maiores,
  totam officia sit perferendis laboriosam autem ducimus fugiat
  consectetur, sint quos mollitia debitis? Ipsa eligendi fugiat
  dolores fuga, expedita nostrum iure! Provident eos ab asperiores
  odio quasi magni iusto saepe quisquam officiis itaque nulla
  similique, sit ducimus perspiciatis, delectus ea. Harum,
  laudantium inventore!`;

  const homeBox = document.createElement("div");
  homeBox.classList.add("box__dbox");

  const homeBoxHeader = document.createElement("h2");
  homeBoxHeader.classList.add("box__dbox__header");
  homeBoxHeader.textContent = "Opening hours:";

  const homeBoxUl = document.createElement("ul");
  homeBoxUl.classList.add("box__dbox__ul");

  openingHours.forEach((el) => {
    const element = ListItem(el, "box__dbox__ul__li");
    homeBoxUl.appendChild(element);
  });

  homeBox.appendChild(homeBoxHeader);
  homeBox.appendChild(homeBoxUl);

  homeContainer.appendChild(homeHeader);
  homeContainer.appendChild(homeParagraph);
  homeContainer.appendChild(homeBox);

  return element;
};

export default Home;
