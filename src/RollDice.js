import React from 'react';

/* ######### Components ######### */
import Dice from './Dice';
/* ############################## */

class RollDice extends React.Component {
  state = {
    dice1: 'one',
    dice2: 'two',
    isRolling: false,
    btnDisabled: false,
    victory: '',
    attempts: 0
  }

  static defaultProps = {
      sides: ["one", "two", "three", "four", "five", "six"]
  }

  roll = () => {
    this.setState({btnDisabled: true});

    const Diced1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const Diced2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    this.setState({dice1: Diced1, dice2: Diced2, isRolling: true}, () => {
      if (this.state.dice1 === "six" && this.state.dice2 === "six") {
        this.setState({victory: <p style={{color: 'green', fontWeight: '600'}}>You win!</p>});
        this.setState({btnDisabled: true});
      } else {
        setTimeout(() => {
          this.setState({isRolling: false});
          this.setState({btnDisabled: false});
        }, 500)
      }
    })
  }

  /* Instead of a callback for setState to promise the result, an Async Function might be working as well

    async tripleKill() {
      await this.setState({score: this.state.score + 1});
      await this.setState({score: this.state.score + 1});
      await this.setState({score: this.state.score + 1});
  }

  */

  incAttempts = () => {
    this.setState({attempts: this.state.attempts + 1});
  }

  render() {
      return (
        <div className="RollDice">
          <div className="flex">
            <Dice prpFace={this.state.dice1} prpRolling={this.state.isRolling} />
            <Dice prpFace={this.state.dice2} prpRolling={this.state.isRolling} />
            <span className="flex-break" />
            <button disabled={this.state.btnDisabled} onClick={() => { this.roll(); this.incAttempts(); }}>
              {this.state.isRolling ? 'Rolling ...' : "Roll dice!"}
            </button>
            <span className="flex-break" />
            <br />
            Attempt: {this.state.attempts}
            <span className="flex-break" />
            {this.state.victory}
          </div>
        </div>
    )
  }
}

export default RollDice;
