import React from "react";
import { connect } from "react-redux";

//import * as actionTypes from "../store/actions/types";
import * as actions from "../store/actions/index";

class Container extends React.PureComponent {
  render() {
    const user_text = "text 1";
    return (
      <div>
        <button onClick={() => console.log(this.props.stateprop)}>
          Get State
        </button>
        <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
        <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
        <button onClick={() => this.props.action_creator1()}>
          Dispatch Action_creator 1
        </button>
        <button onClick={() => this.props.action_creator2()}>
          Dispatch Action_creator 2
        </button>{" "}
        <br /> <br />
        <button onClick={() => console.log(this.props.user_text)}>
          Get user state
        </button>
        <button onClick={() => this.props.action_creator3(user_text)}>
          Dispatch Action_creator 3
        </button>
        {this.props.user_text ? (
          <h1>{this.props.user_text}</h1>
        ) : (
          "yo man nothing yet"
        )}
        <br />
        <button onClick={() => console.log(this.props.count)}>
          Get counter state
        </button>
        <button onClick={() => this.props.action_creator4()}>increase</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stateprop: state.button.stateprop,
  user_text: state.user.user_text,
  count: state.counter.count
});

const mapDispatchToProps = dispatch => ({
  action1: () => dispatch(actions.SUCCESS),
  action2: () => dispatch(actions.FAILURE),
  action_creator1: () => dispatch(actions.success()),
  action_creator2: () => dispatch(actions.failure()),
  action_creator3: text => dispatch(actions.user_input(text)),
  action_creator4: () => dispatch(actions.counter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
