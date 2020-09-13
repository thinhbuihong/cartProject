import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import * as Message from '../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import {actChangeMessage, actCong, actDeleteProductInCart, actTru} from '../actions/index';

class CartContainer extends Component {
  showCartItem = (cart) =>{
    let result = Message.MSG_CART_EMPTY;
    if(cart.length>0){
      result = cart.map((item, index) =>{
        return (
          <CartItem key={index} 
          onDeleteProductInCart={this.props.onDeleteProductInCart}
          onChangeMessage = {this.props.onChangeMessage}
          onCong={this.props.onCong}
          onTru={this.props.onTru}
          item={item}></CartItem>
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
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actDeleteProductInCart(product))
    },
    onChangeMessage: (message) =>{
      dispatch(actChangeMessage(message))
    },
    onCong: (product) =>{
      dispatch(actCong(product))
    },
    onTru: (product)=>{
      dispatch(actTru(product))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);