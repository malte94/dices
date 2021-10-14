import React from 'react';

/* ######### Components ######### */
import Dice from './Dice';
/* ############################## */

class RollDice extends React.Component {
  state = {
    dice1: 'one',
    dice2: 'two'
  }

  static defaultProps = {
      sides: ["one", "two", "three", "four", "five", "six"]
  }

  roll = () => {
    const Diced1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const Diced2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({
        dice1: Diced1,
        dice2: Diced2
    })
  }

  render() {
      return (
        <div className="RollDice">
          <Dice face={this.state.dice1} />
          <Dice face={this.state.dice2} />
          <span className="flex-break" />
          <button onClick={this.roll}>Roll Dice</button>
        </div>
    )
  }
}

export default RollDice;
