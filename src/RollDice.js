import React from 'react';

/* ######### Components ######### */
import Dice from './Dice';
/* ############################## */

class RollDice extends React.Component {
  state = {
    dice1: 'one',
    dice2: 'two',
  }

  constructor(props) {
    super(props);
    this.attempts = 0;
    this.victory = "";
    this.btnDisabled = false;
  }

  static defaultProps = {
      sides: ["one", "two", "three", "four", "five", "six"]
  }

  roll = () => {
    const Diced1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const Diced2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({
        dice1: Diced1,
        dice2: Diced2,
    })

    if (this.state.dice1 === "six" && this.state.dice2 === "six") {
      this.victory = <p style={{color: 'green', fontWeight: '600'}}>You win!</p>;
      this.btnDisabled = true;
    }

  }

  incAttempts = () => {
    this.attempts = this.attempts + 1;
  }

  render() {
      return (
        <div className="RollDice">
          <div className="flex">
            <Dice face={this.state.dice1} />
            <Dice face={this.state.dice2} />
            <span className="flex-break" />
            <button disabled={this.btnDisabled} onClick={() => { this.roll(); this.incAttempts(); }}>Roll Dice</button>
            <span className="flex-break" />
            <br />
            Attempts: {this.attempts}
            <span className="flex-break" />
            {this.victory}
          </div>
        </div>
    )
  }
}

export default RollDice;
