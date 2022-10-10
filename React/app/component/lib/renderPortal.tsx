import ReactDOM from 'react-dom';

export function renderPortal(
  rootId: string,
  component: JSX.Element,
  style?: { [key: string]: string },
) {
  let container = document.getElementById(rootId);
  if (!container) {
    container = document.createElement('div');
    container.id = rootId;
    if (style) {
      (container as HTMLElement).style.cssText = Object.entries(style).map(([key, value]) => `${key}: ${value}`).join(';');
    }

    document.body.appendChild(container);
  }

  ReactDOM.render(
    component,
    container,
  );

  return container;
}
