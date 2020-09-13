import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import * as Message from '../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';

class CartContainer extends Component {
  showCartItem = (cart) =>{
    let result = Message.MSG_CART_EMPTY;
    if(cart.length>0){
      result = cart.map((item, index) =>{
        return (
          <CartItem key={index} item={item}></CartItem>
        )
      })
    }
    return result;
  }
  showTotalAmount = (cart) =>{
    let result =0;
    if(cart.length>0){
      cart.map((x, i) =>{
        result += x.product.price*x.quantity;
      });
    }
    return <CartResult result={result}></CartResult>;
  }

  render() {
    const {cart} = this.props;
    // console.log(cart);
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    )
  }
}
CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
        des: PropTypes.string,
        price: PropTypes.number,
        inventory: PropTypes.number,
        rating: PropTypes.number,
      }),
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
}
const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(CartContainer);