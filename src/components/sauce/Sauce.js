import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { addItem } from '../../actions/additem'

class Sauce extends PureComponent {
  state = {
    sauce: '',
    price: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.addSauce(this.state)
  }

  handleChange = (e) => {
    const sauceItem = e.target.value.split(",")
    this.setState({
      sauce: sauceItem[0],
      price: parseFloat(sauceItem[1])
    })
  }

  addSauce = (element) => {
    this.props.addItem(element)
  }

  render() {
    return (
      <div>
        <h1> Sauce Component Yo</h1>

        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label for="sauceSelector">Select your sauce mayne</label>
            <select className="form-control" id="sauceSelector" value={this.state.value} onChange={this.handleChange}>
              <option value=""> Select a sauce </option>
              <option value="Red Sauce,0"> Red Sauce </option>
              <option value="White Sauce,0"> White Sauce </option>
              <option value="Double Red Sauce,1.00"> Double Red Sauce (+€ 1,00) </option>
              <option value="White/Red Sauce,1.50"> White/Red Sauce (+€ 1,50) </option>
            </select>
          </div>

          <button type="submit">Add Sauce!</button>

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

export default connect(mapStateToProps, { addItem })(Sauce)
