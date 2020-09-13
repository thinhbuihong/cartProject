let inittialState=[
  {
    id:1,
    name:'ip7+',
    image:'',
    des:'san pham do apple san xuat',
    price:500,
    inventory:10,
    rating:4,
  },
  {
    id:2,
    name:'ss s7',
    image:'',
    des:'san pham do samsung san xuat',
    price:400,
    inventory:6,
    rating:3,
  },
  {
    id:3,
    name:'oppo f1s',
    image:'',
    des:'san pham do china san xuat',
    price:200,
    rating:5,
    inventory:14
  },
]

const product = (state=inittialState, action) =>{
  switch(action.type){

    default:
      return[...state];
  }
}

export default product;