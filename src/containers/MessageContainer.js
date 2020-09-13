import React, { Component } from 'react'
import { connect } from 'react-redux';
import Message from '../components/Message';
import * as messages from '../constants/Message';

class MessageContainer extends Component {
  render() {

    return (
      <Message>{this.props.message}</Message>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    message:state.message
  }
}
export default connect(mapStateToProps, null)(MessageContainer);