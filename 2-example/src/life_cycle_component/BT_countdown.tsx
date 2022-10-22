import React, { Component } from 'react'

type Props = {}

type State = {
    cdNumber : number
}

class BT_countdown extends Component<Props, State> {
  constructor(props:Props){
    super(props)

    this.state = {
        cdNumber : 100,
    };
  }

handleClickCd = () => { 
    
};

  render() {
    return (
      <div>BT_countdown</div>
    )
  }
}

export default BT_countdown