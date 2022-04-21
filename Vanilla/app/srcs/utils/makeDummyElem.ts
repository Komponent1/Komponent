function makeDummyElem(): HTMLElement[] {
  const colors = [ '#BF7950', '#8C634A', '#A6A6A6', '#B3D5F2'];

  const elems = colors.map(e => {
    const elem = document.createElement('div');
    elem.style.backgroundColor = e;
    elem.style.width = '400px';
    elem.style.height = '200px';

    return elem;
  })
  return elems
};

export default makeDummyElem;
