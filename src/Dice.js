import React from 'react';

class Dice extends React.Component {
  render() {
      return (
        <i className={`fas fa-dice-${this.props.prpFace} ${this.props.prpRolling ? 'ani-dice-wobble' : ''}`} />
    )
  }
}

export default Dice;
