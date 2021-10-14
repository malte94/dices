import React from 'react';

class Dice extends React.Component {
  render() {
      return (
        <i className={`fas fa-dice-${this.props.face}`} />
    )
  }
}

export default Dice;
