import React, { Component } from "react";

import "./App.css";
import Tetris from "./components/Tetris";

const App = () => {
  return (
    <div>
      <Tetris />
    </div>
  );
};
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       transform: 90,
//       rotateStyle: { width: "100px", height: "30px", backgroundColor: "red" }
//     };
//   }
//   rotateElement = event => {
//     this.setState({
//       transform: this.state.transform + 90
//     });
//     console.log(event);
//     if (this.state.transform === 360) {
//       this.setState({
//         transform: 0
//       });
//     }
//     // console.log("dd");
//     // if (event.key === 38) {
//     //   console.log("sss");
//     // }
//     // if (event.keyCode === 38) {
//     //   console.log("38 key pressed");
//     // }
//     // let x = 20;
//     let style = {
//       transform: `rotate(${this.state.transform}deg)`,
//       width: "100px",
//       height: "30px",
//       backgroundColor: "red"
//     };
//     this.setState({
//       rotateStyle: style
//     });
//     return style;
//   };
//   render() {
//     return (
//       <div className="App" onKeyPress={e => this.rotateElement(e)}>
//         <div
//           style={this.state.rotateStyle}
//           onClick={e => this.rotateElement(e)}
//           className="test"
//         ></div>
//       </div>
//     );
//   }
// }

export default App;
