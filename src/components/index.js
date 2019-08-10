import React from "react";

//displaying props in functional component
// const Main = props => (
//   <div>
//     <h1>{props.name}</h1>
//     <h1>{props.age}</h1>
//   </div>
// );

//props in class based component
//In class component you need to pass this in it

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      stateprop1: "this is our initial state",
      stateprop2: 5
    };
  }

  names = [
    { name: "moyin", dept: "csc" },
    { name: "hasanah", dept: "csc" },
    { name: "wale", dept: "csc" }
  ];

  _handleChange1 = () =>
    this.setState({
      stateprop1: this.state.stateprop1 + "L"
    });

  _handleChange2 = () =>
    this.setState({
      stateprop2: this.state.stateprop2 + 1
    });

  RenderList = props => (
    <div>
      <p>
        <b style={{ marginRight: "5px" }}>{props.item.name}</b>
        {props.item.dept}
      </p>
    </div>
  );

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.age}</h1>
        <button onClick={this._handleChange1}>change state</button>
        <button onClick={this._handleChange2}>change state 2</button>

        <h3>{this.state.stateprop1}</h3>
        <h3>{this.state.stateprop2}</h3>

        {this.names.map((item, index) => (
          <this.RenderList key={index} item={item} />
        ))}
      </div>
    );
  }
}

export default Main;
