import React, { Component } from 'react'
import Header from './Header';
// import Products from './Products'
import Message from './Message';
import Footer from './Footer';
import ProductContainer from '../containers/ProductContainer';
import CartContainer from '../containers/CartContainer';

export default class App extends Component {
  render() {
    return (
      <div className="hidden-sn animated deep-purple-skin">
        <Header></Header>
        <main id="mainContainer">
          <div className="container">
            {/* <Products></Products> */}
            <ProductContainer></ProductContainer>
            <Message></Message>
            <CartContainer></CartContainer>
          </div>
        </main>
        <Footer></Footer>
      </div>

    )
  }
}
