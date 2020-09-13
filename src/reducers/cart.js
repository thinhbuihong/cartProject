import * as types from '../constants/ActionType';
let datacart = JSON.parse(localStorage.getItem('cart'));
let inittialState = datacart || [
  // {
  //   product: {
  //     id: 1,
  //     name: 'ip7+',
  //     image: '',
  //     des: 'san pham do apple san xuat',
  //     price: 500,
  //     inventory: 10,
  //     rating: 4,
  //   },
  //   quantity: 5
  // },
  // {
  //   product: {
  //     id: 3,
  //     name: 'oppo f1s',
  //     image: '',
  //     des: 'san pham do china san xuat',
  //     price: 200,
  //     rating: 5,
  //     inventory: 14
  //   },
  //   quantity: 3
  // }
];

const cart = (state = inittialState, action) => {
  const {product,quantity} = action;
  switch (action.type) {
    case types.ADD_TO_CART:
      let i = state.findIndex((x) =>{
        return x.product.id === product.id;
      });
      if(i !== -1){
        state[i].quantity+=1;
      }else{
        state.push({product,quantity});
      }
      localStorage.setItem('cart', JSON.stringify(state));
      return [...state];

    case types.DELETE_PRODUCT_IN_CART:
      const ip = state.findIndex((x) =>{
        return x.product.id === product.id;
      });
      state.splice(ip,1);

      localStorage.setItem('cart', JSON.stringify(state));
      return [...state];
    /////////////////////////////////////
    case types.CONG:
      const ipc = state.findIndex((x) =>{
        return x.product.id === product.id;
      });
      state[ipc].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(state));
      return [...state];
    ////////////////////////////////////////////
    case types.TRU:
      const ipt = state.findIndex((x) =>{
        return x.product.id === product.id;
      });
      if(state[ipt].quantity === 1)
        state.splice(ipt,1);
      else
        state[ipt].quantity -= 1;
      localStorage.setItem('cart', JSON.stringify(state));
      return [...state];

    default:
      return [...state];
  }
}

export default cart;