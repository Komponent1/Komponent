import { multiopendrawer } from '../../components';
import md from '../../components/multiopendrawer/README.md';
import { CONFIG } from '../configType';

const lists = [
  {
    title: 'First',
    list: [
      {
        text: 'count1',
        act: () => console.log('111')
      },
      {
        text: 'count2',
        act: () => {}
      },
      {
        text: 'count3',
        act: () => {}
      }
    ]
  },
  {
    title: 'Second',
    list: [
      {
        text: 'count1',
        act: () => {}
      },
      {
        text: 'count2',
        act: () => {}
      },
      {
        text: 'count3',
        act: () => {}
      }
    ]
  },
  {
    title: 'Third',
    list: [
      {
        text: 'count1',
        act: () => {}
      },
      {
        text: 'count2',
        act: () => {}
      },
      {
        text: 'count3',
        act: () => {}
      }
    ]
  }
]

const config: CONFIG = {
  name: 'Multi Open Drawer',
  render: multiopendrawer,
  prop: {
    config: lists
  },
  explain: md
};

export default config;