import React, { Component } from 'react'
// import Product from './Product';
// import {connect} from 'react-redux';

class Products extends Component {
  // showProducts = (products) =>{
  //   let result = null;
  //   if(products.length>0){
  //     result= products.map((product, i) =>{
  //       return <Product key={i} product={product}></Product>
  //     })
  //   }
  //   return result;
  // }
  render() {
    // let {products} = this.props;
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {this.props.children}
          
        </div>
      </section>

    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     products: state.products
//   }
// }

// export default connect(mapStateToProps, null)(Products);
export default Products;