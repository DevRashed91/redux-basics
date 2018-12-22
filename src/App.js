import React from "react";
import { connect } from "react-redux";
import * as actionsTypes from "../store/actions";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>this is app page: {this.props.ctr}</p>
        <button
          disabled={this.props.ctr >= 10}
          onClick={this.props.onIncrementCounter}
        >
          increment counter
        </button>
        <button
          disabled={this.props.ctr <= 0}
          onClick={this.props.onDeccrementCounter}
        >
          increment counter
        </button>
        <hr />
        {this.props.ctr >= 10 && "max value you given! now STOP!! :O"}
        {this.props.ctr <= 0 && `WHATT!! 'Zero' give some more man :(`}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionsTypes.INCREMENT }),
    onDeccrementCounter: () => dispatch({ type: actionsTypes.DECREMENT })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
