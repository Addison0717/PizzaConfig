import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { addItem } from '../../actions/additem'

class Base extends PureComponent {
  state = {
    base: '',
    basePrice: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.addBase(this.state)
  }

  handleChange = (e) => {
    const baseItem = e.target.value.split(",")
    this.setState({
      base: baseItem[0],
      basePrice: parseFloat(baseItem[1])
    })
  }

  addBase = (element) => {
    this.props.addItem(element)
  }

  render() {
    return (
      <div>
        <h1> Base Component Yo</h1>

        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label for="baseSelector">Select your base</label>
            <select className="form-control" id="baseSelector" value={this.state.value} onChange={this.handleChange}>
              <option value=""> Select a base </option>
              <option value="20cm NY,6.45"> 20cm NY Style € 6,45 </option>
              <option value="25cm NY,8.99"> 25cm NY Style € 8,99 </option>
              <option value="30cm NY,11.49" value2="11.49"> 30cm NY Style € 11,49 </option>
              <option value="35cm NY,13.49" value2="13.49"> 35cm NY Style € 13,49 </option>
            </select>
          </div>

          <button type="submit">Add Base!</button>

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

export default connect(mapStateToProps, { addItem })(Base)
