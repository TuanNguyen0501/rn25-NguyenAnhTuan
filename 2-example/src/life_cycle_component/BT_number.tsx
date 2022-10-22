import React, { Component } from "react";

type Props = {};

// B1: khai báo giá trị numberSate vs kiểu dữ liệu number
type State = {
  numberState: number;
};

class BT_number extends Component<Props, State> {
  //B2: tạo 1 constructor
  constructor(props: Props) {
    super(props);
    //B3: tạo object state vs numberState : 0
    this.state = {
      numberState: 0,
    };
  }

  //B4: tạo handle event để tăng lên 1
  handleClick = () => {
    this.setState({ numberState: this.state.numberState + 1 });
  };

  
  //B5: tạo nút để onclick tăng giá trị lên 1
  render() {
    return (
      <div className="increment_1">
        <button onClick={this.handleClick}>INCREMENT</button>
        <p>{this.state.numberState}</p>
      </div>
    );
  }
}

export default BT_number;
