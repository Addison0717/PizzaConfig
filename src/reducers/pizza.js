import { ADD_ITEM, SPEED_DELIVERY } from '../actions/additem'

export default function(state = pizza, action) {
  switch (action.type) {
  case ADD_ITEM:
    const newState = {...state}
    if(action.payload.base){
      newState.base = action.payload.base
    }
    if(action.payload.basePrice){
      newState.basePrice = action.payload.basePrice
    }
    if(action.payload.sauce){
      newState.sauce = action.payload.sauce
    }
    if(action.payload.saucePrice){
      newState.saucePrice = action.payload.saucePrice
    }
    if(action.payload.topping1){
      newState.topping1 = action.payload.topping1
    }
    if(action.payload.topping1Price){
      newState.topping1Price = action.payload.topping1Price
    }
    if(action.payload.topping2){
      newState.topping2 = action.payload.topping2
    }
    if(action.payload.topping2Price){
      newState.topping2Price = action.payload.topping2Price
    }
    if(action.payload.topping3){
      newState.topping3 = action.payload.topping3
    }
    if(action.payload.topping3Price){
      newState.topping3Price = action.payload.topping3Price
    }
    newState.price = newState.basePrice + newState.saucePrice + newState.topping1Price + newState.topping2Price + newState.topping3Price
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
  basePrice: 0,
  sauce: '',
  saucePrice: 0,
  topping1: '',
  topping1Price: 0,
  topping2: '',
  topping2Price: 0,
  topping3: '',
  topping3Price: 0,
  price: 0
}
