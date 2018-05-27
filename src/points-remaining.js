import React from 'react'
import PropTypes from 'prop-types';

class PointsRemaining extends React.Component {



  render(){
    return(
      <div className="PRBlock">
        <img src="./vaultboy.png"/>
        <h1 className="points">Points Remaining</h1>
        <div className="remain">{this.props.pointsRemaining}</div>
      </div>
    )
  }
}
PointsRemaining.propTypes = {
  pointsRemaining: function(props, propName, componentName) {
    if (props[propName] > 28 || props[propName] < 0) {
      this.setState({error: true})
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  }
}

export default PointsRemaining
