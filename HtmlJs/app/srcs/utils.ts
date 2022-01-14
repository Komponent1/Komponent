export function makeDiv(name: string) {
  const div = document.createElement("div")
  div.classList.add("content_box");

  const title = document.createElement("h1");
  const titleText = document.createTextNode(name)
  title.classList.add("title");

  div.appendChild(title);

  return div
};
