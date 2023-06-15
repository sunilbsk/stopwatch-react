import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timerCount: 0, isTimerRunning: false}

  componentWillUnmount() {
    this.clearTimerInterval(this.timeInterval)
  }

  stopwatchTimerCount = () => {
    const {timerCount} = this.state
    const minutes = Math.floor(timerCount / 60)
    const seconds = Math.floor(timerCount % 60)
    const stringFormatMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringFormatSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringFormatMinutes}:${stringFormatSeconds}`
  }

  resetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timerCount: 0})
  }

  stopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timerCount: prevState.timerCount + 1,
    }))
  }

  startTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-card">
          <div className="timer-heading-section-part">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              alt="stopwatch"
              className="timer-image"
            />
            <h className="timer-heading">Timer</h>
          </div>
          <p className="timer-count">{this.stopwatchTimerCount()}</p>
          <div className="operating-timer-container">
            <button
              type="button"
              className="btn start-button"
              onClick={this.startTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="btn stop-button"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn reset-button"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
// Write your code here
