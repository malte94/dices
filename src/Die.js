import React from 'react';

class Die extends React.Component {
  state = {

  }

  render() {
      return (
        <section class="Die">
            <i className={`fas fa-dice-${this.props.face}`} />
        </section>
    )
  }
}

export default Die;
