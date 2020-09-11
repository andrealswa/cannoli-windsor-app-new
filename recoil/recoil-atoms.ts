import { atom } from 'recoil';

export const cart = atom({
  // a unique id among the other atoms/selectors
  key: 'cart',
  // the initial value
  default: {
    assorted: {
      smallBox: {
        mini: 0,
        medium: 0,
        large: 0,
      },
      bigBox: {
        mini: 0,
        medium: 0,
        large: 0,
      }
    }
  },
});

export const notes = atom({
  key: 'notes',
  default: ""
});
