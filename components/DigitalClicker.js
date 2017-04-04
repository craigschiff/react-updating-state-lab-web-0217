import React from 'react'

class DigitalClicker extends React.Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
    this.click = this.click.bind(this)

  }
  click() {
    const increment = this.state.timesClicked + 1
    this.setState({
      timesClicked: increment
    })
  }
  render () {
    return(
      <div>
        <button onClick={this.click}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

module.exports = DigitalClicker
