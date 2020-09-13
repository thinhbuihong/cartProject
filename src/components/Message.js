import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return (
      <h3>
        <span className="badge amber darken-2">{this.props.children}</span>
      </h3>

    )
  }
}
