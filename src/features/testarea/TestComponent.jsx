import React, { Component } from 'react'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions';
import { Button } from 'semantic-ui-react';

const mapStateToProps = state => ({
  data: state.test.data
})

/*const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(incrementCounter())
    },
    decrement: () => {
      dispatch(decrementCounter())
    }
  }
}*/

const action = {
  incrementCounter, 
  decrementCounter
}

class TestComponent extends Component {
  render() {
    //const { data, increment, decrement } = this.props;
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} color='green' content="increment" />
        <Button onClick={decrementCounter} color='red' content="decrement" />
      </div>
    )
  }
}

export default connect(mapStateToProps, action)(TestComponent);
