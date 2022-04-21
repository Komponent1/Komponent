function createElem (type: string, classname?: string) {
  const elem = document.createElement(type);
  if (classname) elem.classList.add(classname);

  return elem;
};

export default createElem;