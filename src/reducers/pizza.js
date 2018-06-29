import { ADD_ITEM, SPEED_DELIVERY } from '../actions/additem'

export default function(state = pizza, action) {
  switch (action.type) {
  case ADD_ITEM:
    const newState = {...state}
    if(action.payload.base){
      newState.base = action.payload.base
    }
    if(action.payload.sauce){
      newState.sauce = action.payload.sauce
    }
    if(action.payload.topping1){
      newState.topping1 = action.payload.topping1
    }
    if(action.payload.topping2){
      newState.topping2 = action.payload.topping2
    }
    if(action.payload.topping3){
      newState.topping3 = action.payload.topping3
    }
    newState.price += action.payload.price
    return newState
  case SPEED_DELIVERY:
    const newPrice = {...state}
    newPrice.price = newPrice.price * action.payload
    return newPrice
  default:
    return state
  }
}



const pizza = {
  base: '',
  sauce: '',
  topping1: '',
  topping2: '',
  topping3: '',
  price: 0
}
