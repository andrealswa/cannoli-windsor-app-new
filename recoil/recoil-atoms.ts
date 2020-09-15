import { count } from 'console';
import { atom, selector } from 'recoil';

export const cart = atom({
  // a unique id among the other atoms/selectors
  key: 'cart',
  // the initial value
  default: {
    small_box_mini_cannoli: 1,
    small_box_medium_cannoli: 0,
    small_box_large_cannoli: 2,
    big_box_mini_cannoli: 1,
    big_box_medium_cannoli: 1,
    big_box_large_cannoli: 0,
  }
});

export const submit = atom({
  key: 'submit',
  default: true
})

export const paymentMethod = atom({
  key: 'paymentMethod',
  default: ""
})

export const notes = atom({
  key: 'notes',
  default: ""
});

export const pickupDelivery = atom({
  key: 'pickupDelivery',
  default: ""
});

export const cartCount = selector({
  key: 'cartCount',
  get: ({ get }) => {
    const cartItems = get(cart);
    let count = 0;
    count += cartItems.small_box_mini_cannoli;
    count += cartItems.small_box_medium_cannoli;
    count += cartItems.small_box_large_cannoli;
    count += cartItems.big_box_mini_cannoli;
    count += cartItems.big_box_medium_cannoli;
    count += cartItems.big_box_large_cannoli;
    return count;
  },
});
