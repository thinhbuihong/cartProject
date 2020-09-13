import React, { Component } from 'react'

export default class CartItem extends Component {
  render() {
    const {product, quantity} = this.props.item;
    return (
      <tr>
        <th scope="row">
          <img src={product.image} alt className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{product.name}</strong>
          </h5>
        </td>
        <td>{product.price}</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <a>—</a>
            </label>
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{product.price*quantity + '$'}</td>
        <td>
          <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title data-original-title="Remove item">
            X
                  </button>
        </td>
      </tr>

    )
  }
}
