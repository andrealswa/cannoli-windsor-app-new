import { count } from 'console';
import { atom, selector } from 'recoil';
import { OrderSummary } from '../components/order/OrderSummary';

export const cart = atom({
  // a unique id among the other atoms/selectors
  key: 'cart',
  // the initial value
  default: {
    small_box_mini_cannoli: 0,
    small_box_medium_cannoli: 0,
    small_box_large_cannoli: 0,
    big_box_mini_cannoli: 0,
    big_box_medium_cannoli: 0,
    big_box_large_cannoli: 0,
    vegan_cannoli: 0,
  },
});

export const confirmationCodeAtom = atom({
  key: 'confirmationCodeAtom',
  default: '',
});

export const totalAtom = atom({
  key: 'totalAtom',
  default: 0,
});

export const hstAtom = atom({
  key: 'hstAtom',
  default: 0,
});

export const address = atom({
  key: 'address',
  default: '',
});

export const city = atom({
  key: 'city',
  default: '',
});

export const submit = atom({
  key: 'submit',
  default: true,
});

export const paymentMethod = atom({
  key: 'paymentMethod',
  default: '',
});

export const notes = atom({
  key: 'notes',
  default: '',
});

export const pickupDelivery = atom({
  key: 'pickupDelivery',
  default: '',
});

export const time = atom({
  key: 'time',
  default: new Date(),
});

export const todayLater = atom({
  key: 'todayLater',
  default: '',
});

export const emailAtom = atom({
  key: 'emailAtom',
  default: '',
});

export const phoneAtom = atom({
  key: 'phoneAtom',
  default: '',
});

export const callTextAtom = atom({
  key: 'callTextAtom',
  default: '',
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
    count += cartItems.vegan_cannoli;
    return count;
  },
});
