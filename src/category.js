import React from 'react'

class Category extends React.Component {

  state = {
    numberSelected: 0
  }

  // {/* <i className="fas fa-arrow-left arrow" onClick={(this.props.category.points) => this.props.increasePoints(this.props.category.points)}></i> */}
  // {/* <i className="fas fa-arrow-right arrow" onClick={(this.props.category.points) => this.props.reducePoints(this.props.category.points)}></i> */}
  //
  // shouldComponentUpdate(nextProps,nextState){
  //   return nextState.count <= 4
  // }


  increaseNumber = () => {
    if (this.state.numberSelected <= 9) {
      if (this.props.pointsRemaining - this.props.category.points > 0) {
        let newNumberSelected = this.state.numberSelected + 1
        this.setState({
          numberSelected: newNumberSelected
        }, this.props.reducePoints(this.props.category.points))
      } else {
        this.props.toggleError()
      }
    } else {
      this.props.toggleError()
    }
  }


  decreaseNumber = () => {
    if (this.state.numberSelected > 0) {
      if (this.props.pointsRemaining + this.props.category.points < 28) {
        let newNumberSelected = this.state.numberSelected - 1
        this.setState({
          numberSelected: newNumberSelected
        }, this.props.increasePoints(this.props.category.points))
      } else {
        this.props.toggleError()
      }
    } else {
      this.props.toggleError()
    }
  }



  render(){

    console.log(this.props)

    return(
    <div className="category-box">
      <div className="category-background">
        <div className="category-name">{this.props.category.name}</div>
        <div className="arrow-container">
          <i className="fas fa-arrow-left arrow" onClick={this.decreaseNumber}></i>
          <div className="category-value">{this.state.numberSelected}</div>
          <i className="fas fa-arrow-right arrow" onClick={this.increaseNumber}></i>
        </div>
      </div>
    </div>
  )
  }
}

export default Category
