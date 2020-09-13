import * as types from '../constants/ActionType';
let datacart = JSON.parse(localStorage.getItem('cart'));
let inittialState = datacart || [
  {
    product: {
      id: 1,
      name: 'ip7+',
      image: '',
      des: 'san pham do apple san xuat',
      price: 500,
      inventory: 10,
      rating: 4,
    },
    quantity: 5
  },
  {
    product: {
      id: 3,
      name: 'oppo f1s',
      image: '',
      des: 'san pham do china san xuat',
      price: 200,
      rating: 5,
      inventory: 14
    },
    quantity: 3
  }
];

const cart = (state = inittialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return [...state];
    default:
      return [...state];
  }
}

export default cart;