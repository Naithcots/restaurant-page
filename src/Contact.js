import Container from "./Container";
import ListItem from "./components/ListItem";

const contactArr = [
  `Address: Lorem ipsum, dolor sit amet consectetur adipisicing
    elit.`,
  `Phone number: 123 456 789`,
  `e-mail: email@restpage.pl`,
];

const Contact = () => {
  const element = document.createElement("div");
  element.classList.add("box");
  const contactContainer = Container();
  element.appendChild(contactContainer);

  const contactHeader = document.createElement("h1");
  contactHeader.classList.add("box__header");
  contactHeader.textContent = "Contact us!";

  const contactParagraph = document.createElement("p");
  contactParagraph.classList.add("box__paragraph");
  contactParagraph.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
  asperiores ea sed saepe provident dolorum aspernatur officia unde
  tempore soluta, neque perspiciatis delectus tenetur, voluptates
  magnam laboriosam odit quasi numquam!`;

  const contactBox = document.createElement("div");
  contactBox.classList.add("box__dbox");

  const contactBoxUl = document.createElement("ul");
  contactBoxUl.classList.add("box__dbox__ul");

  contactArr.forEach((el) => {
    const element = ListItem(el, "box__dbox__ul__li");
    contactBoxUl.appendChild(element);
  });

  contactBox.appendChild(contactBoxUl);

  contactContainer.appendChild(contactHeader);
  contactContainer.appendChild(contactParagraph);
  contactContainer.appendChild(contactBox);

  return element;
};

export default Contact;
