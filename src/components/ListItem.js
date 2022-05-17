const ListItem = (textContent, ...classNames) => {
  const element = document.createElement("li");
  classNames.forEach((e) => {
    element.classList.add(e);
  });
  element.textContent = textContent;
  return element;
};

export default ListItem;
