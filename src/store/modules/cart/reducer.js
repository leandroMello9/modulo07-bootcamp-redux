const initial_state = []
export default function cart(state = initial_state, action) {
 
  switch(action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product]
      default:
        return state
  }
}