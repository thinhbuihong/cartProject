/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import * as Message from '../constants/Message';

export default class Product extends Component {
  showRatings = (reating) => {
    let result = [];
    for (let i = 0; i <reating; i++) {
        result.push(<li>
          <i className="fa fa-star" />
        </li>)
      }
    return result;
  }
  onAddToCart = (product) =>{
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
  }
  render() {
    const { product } = this.props;
    return (
      <div className="col-lg-5 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-2">
            <img src={product.image} className="img-fluid" alt />
            <a>
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h3 className="card-title">
              <strong>
                <a>{product.name}</a>
              </strong>
            </h3>
            <ul className="rating">
              <li>
                {this.showRatings(product.rating)}
              </li>
            </ul>
            <p className="card-text">
              {product.des}
            </p>
            <div className="card-footer">
              <span className="left">{product.price}</span>
              <span className="right">
                <a className="btn-floating blue-gradient" data-toggle="tooltip" 
                data-placement="top" title data-original-title="Add to Cart"
                onClick={this.onAddToCart.bind(this,product)}>
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
