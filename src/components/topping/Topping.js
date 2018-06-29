import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { addItem } from '../../actions/additem'

class Topping extends PureComponent {
  state = {
    topping1: '',
    topping1Price: 0,
    topping2: '',
    topping2Price: 0,
    topping3: '',
    topping3Price: 0,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.addTopping(this.state)
  }

  handleChange1 = (e) => {
    const toppingOne = e.target.value.split(",")
    this.setState({
      topping1: toppingOne[0],
      topping1Price: parseFloat(toppingOne[1])
    })
  }
  handleChange2 = (e) => {
    const toppingTwo = e.target.value.split(",")
    this.setState({
      topping2: toppingTwo[0],
      topping2Price: parseFloat(toppingTwo[1])
    })
  }
  handleChange3 = (e) => {
    const toppingThree = e.target.value.split(",")
    this.setState({
      topping3: toppingThree[0],
      topping3Price: parseFloat(toppingThree[1])
    })
  }

  addTopping = (element) => {
    this.props.addItem(element)
  }

  render() {
    return (
      <div>
        <h1> Topping Component Yo </h1>
        <h3> All toppings .50 each! </h3>

        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label for="topping1Selector">Topping 1</label>
            <select className="form-control" id="topping1Selector" value={this.state.value} onChange={this.handleChange1}>
              <option value=""> Select Topping 1 </option>
              <option value="Pepperonni,0.50"> Pepperonni </option>
              <option value="Chicken,0.50"> Chicken </option>
              <option value="Sausage,0.50"> Sausage </option>
              <option value="Green Olives,0.50"> Green Olives </option>
              <option value="Red Onions,0.50"> Red Onions </option>
              <option value="Spinach,0.50"> Spinach </option>
              <option value="Cherry Tomatoes,0.50"> Cherry Tomatoes </option>
              <option value="Pineapple,0.50"> Pineapple </option>
            </select>
          </div>

          <div className="form-group">
            <label for="topping2Selector">Topping 2</label>
            <select className="form-control" id="topping2Selector" value={this.state.value} onChange={this.handleChange2}>
              <option value=""> Select Topping 2 </option>
              <option value="Pepperonni,0.50"> Pepperonni </option>
              <option value="Chicken,0.50"> Chicken </option>
              <option value="Sausage,0.50"> Sausage </option>
              <option value="Green Olives,0.50"> Green Olives </option>
              <option value="Red Onions,0.50"> Red Onions </option>
              <option value="Spinach,0.50"> Spinach </option>
              <option value="Cherry Tomatoes,0.50"> Cherry Tomatoes </option>
              <option value="Pineapple,0.50"> Pineapple </option>
            </select>
          </div>

          <div className="form-group">
            <label for="topping3Selector">Topping 3</label>
            <select className="form-control" id="topping3Selector" value={this.state.value} onChange={this.handleChange3}>
              <option value=""> Select Topping 3 </option>
              <option value="Pepperonni,0.50"> Pepperonni </option>
              <option value="Chicken,0.50"> Chicken </option>
              <option value="Sausage,0.50"> Sausage </option>
              <option value="Green Olives,0.50"> Green Olives </option>
              <option value="Red Onions,0.50"> Red Onions </option>
              <option value="Spinach,0.50"> Spinach </option>
              <option value="Cherry Tomatoes,0.50"> Cherry Tomatoes </option>
              <option value="Pineapple,0.50"> Pineapple </option>
            </select>
          </div>

          <button type="submit">Add Toppings!</button>

        </form>

      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps, { addItem })(Topping)
