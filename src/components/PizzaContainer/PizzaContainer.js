import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { speedDelivery } from '../../actions/additem'

import Base from '../base/Base'
import Sauce from '../sauce/Sauce'
import Topping from '../topping/Topping'

class PizzaContainer extends PureComponent {

  handleChange = () => {

    if (document.getElementById('speedDeliveryCheckbox').checked)
    {
      this.props.speedDelivery(1.1)
    } else {
      this.props.speedDelivery(0.90)
    }
  }

  render() {
    return (
      <div>

        <h1> This is the MFn Pizza Maker DUDE </h1>

        <div data-toggle="collapse" href="#base" role="button" aria-expanded="false">Base</div>

        <div className="collapse" id="base">
          <Base />
        </div>

        <div data-toggle="collapse" href="#sauce" role="button" aria-expanded="false">Sauce</div>

        <div className="collapse" id="sauce">
          <Sauce />
        </div>

        <div data-toggle="collapse" href="#topping" role="button" aria-expanded="false">Toppings</div>

        <div className="collapse" id="topping">
          <Topping />
        </div>

        <div className="Checkout">

          <h1>Checkout</h1>

          <h3>Base: {this.props.pizza.base}</h3>
          <h3>Sauce: {this.props.pizza.sauce}</h3>
          <h3>Toppings: </h3>
          <h2>{this.props.pizza.topping1}</h2>
          <h2>{this.props.pizza.topping2}</h2>
          <h2>{this.props.pizza.topping3}</h2>


          <h3>Total Price: € {this.props.pizza.price}</h3>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="speedDeliveryCheckbox" onChange={this.handleChange}/>
            <label class="form-check-label" for="speedDeliveryCheckbox">Speed Delivery (+10% of Total Price)</label>
          </div>

        </div>

      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps, { speedDelivery })(PizzaContainer)
