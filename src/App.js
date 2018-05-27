import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PointsRemaining from './points-remaining'
import Category from './category'
import specialData from './special-data.js'

class App extends Component {

  state = {
    specialData: [],
    pointsRemaining: 28,
    error: false

  }

  reducePoints = (points) => {
    this.state.error ? this.toggleError() : null
    this.setState({
      pointsRemaining: this.state.pointsRemaining - points
    })
  }

  increasePoints = (points) => {
    this.state.error ? this.toggleError() : null
    this.setState({
        pointsRemaining: this.state.pointsRemaining + points
    })
  }

  toggleError = () => {
    // let newError = !this.state.error
    this.setState({
      error: !this.state.error
    })
  }

  componentWillMount(){
    this.setState({
      specialData: specialData
    })
  }

  render() {
    console.log(this.state.specialData)
    const Categories = this.state.specialData.map((category) => <Category category={category} increasePoints={this.increasePoints} reducePoints={this.reducePoints} pointsRemaining={this.state.pointsRemaining} toggleError={this.toggleError}  />)
    return (
      <div>
      <div className="headline">You're S.P.E.C.I.A.L.</div>
      { this.state.error ? <h1> Can't be negative or spend down more points than one has. Can't alot less than 0 or more than 10 of any given attribute. </h1> : null }

      {Categories}
      <PointsRemaining pointsRemaining={this.state.pointsRemaining} />
      </div>
    );
  }
}

export default App;
