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
      // THIS IS NOT CORRECT I KNOW I JUST HAD A HARD TIME FINDING THE RIGHT SOLUTION
      this.props.speedDelivery(0.91000001)
    }
  }

  render() {
    return (
      <div>

        <div className="selectors">

          <h1 className="mainHeading"> New Age Pizza </h1>
          <h3 className="secondaryHeading"> Select a category below to begin! </h3>

          <div data-toggle="collapse" href="#base" role="button" aria-expanded="false" className="baseSection baseClick">Base</div>

          <div className="collapse baseSection" id="base">
            <Base />
          </div>

          <div data-toggle="collapse" href="#sauce" role="button" aria-expanded="false" className="sauceSection sauceClick">Sauce</div>

          <div className="collapse sauceSection" id="sauce">
            <Sauce />
          </div>

          <div data-toggle="collapse" href="#topping" role="button" aria-expanded="false" className="toppingSection toppingClick">Toppings</div>

          <div className="collapse toppingSection" id="topping">
            <Topping />
          </div>

        </div>

        <div className="checkout">

          <h1>Checkout</h1>

          <h3>Base: {this.props.pizza.base}</h3>
          <h3>Sauce: {this.props.pizza.sauce}</h3>
          <h3>Toppings: </h3>
          <h2>{this.props.pizza.topping1}</h2>
          <h2>{this.props.pizza.topping2}</h2>
          <h2>{this.props.pizza.topping3}</h2>

          <h3>Total Price: € { parseFloat(this.props.pizza.price).toFixed(2) }</h3>

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
