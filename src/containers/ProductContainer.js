import React, { Component } from 'react'
import {connect} from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types';

class ProductContainer extends Component {
  showProducts = (products) =>{
    let result = null;
    if(products.length>0){
      result= products.map((product, i) =>{
        return <Product key={i} product={product}></Product>
      })
    }
    return result;
  }
  render() {
    const {products} = this.props;
    return (
      <Products>
        {this.showProducts(products)}
      </Products>
    )
  }
}
ProductContainer.propTypes={
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number,
      name:PropTypes.string,
      image: PropTypes.string,
      des: PropTypes.string,
      price: PropTypes.number,
      inventory: PropTypes.number,
      rating: PropTypes.number,
    })
  ).isRequired
}
const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps,null)(ProductContainer);