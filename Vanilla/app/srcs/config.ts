import * as comp from './components';

type Comp = {
  name: string,
  render: Function
}
export const componentList = {
  autocomplete: {
    name: 'Auto Complete',
    render: comp.autocomplete
  },
  contextmenu: {
    name: 'context Menu',
    render: comp.contextMenu
  }
};
