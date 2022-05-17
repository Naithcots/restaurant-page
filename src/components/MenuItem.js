import ListItem from "./ListItem";

const MenuItem = ({ name, ingredients, src }) => {
  const element = document.createElement("div");
  element.classList.add("box__dbox");
  element.classList.add("box__dbox--menu");
  element.style.backgroundImage = `url(${src})`;

  const elementDesc = document.createElement("div");
  elementDesc.classList.add("box__dbox__desc");

  const elementHeader = document.createElement("h2");
  elementHeader.classList.add("box_dbox__header");
  elementHeader.textContent = name;

  const elementSpan = document.createElement("span");
  elementSpan.classList.add("box_dbox__span");
  elementSpan.textContent = "ingredients:";

  const elementUl = document.createElement("ul");
  elementUl.classList.add("box__dbox__ul");
  elementUl.classList.add("box__dbox__ul--menu");

  ingredients.forEach((el) => {
    const element = ListItem(
      el,
      "box__dbox__ul__li",
      "box__dbox__ul__li--menu"
    );
    elementUl.appendChild(element);
  });

  element.appendChild(elementDesc);

  elementDesc.appendChild(elementHeader);
  elementDesc.appendChild(elementSpan);
  elementDesc.appendChild(elementUl);

  return element;
};

export default MenuItem;
