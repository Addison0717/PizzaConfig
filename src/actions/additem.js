export const ADD_ITEM = 'ADD_ITEM'
export const SPEED_DELIVERY = 'SPEED_DELIVERY'

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  }
}

export function speedDelivery(price) {
  return {
    type: SPEED_DELIVERY,
    payload: price
  }
}
