import React, { Component } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";


interface IProps {}
interface IState {
  like: boolean;
}

export default class BTlike extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      like: false,
    };
  }

  setLike = () => {
    this.setState({
      like: !this.state.like,
    });
  };

  render() {
    return (
      <>
        <div onClick={this.setLike}>
          {this.state.like ? <AiFillLike/> : <AiOutlineLike />}
        </div>
      </>
    );
  }
}
