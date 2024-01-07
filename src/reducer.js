import { DISPLAY_ITEMS, TOGGLE_AMOUNT } from "./actions"


const reducer = (state, action) => {
if (action.type === DISPLAY_ITEMS) {
  return {
    ...state,
    list: action.payload
  }
}
}

export default reducer