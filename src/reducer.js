import {
	DISPLAY_ITEMS,
	TOGGLE_AMOUNT,
	ADD_ITEM,
	SHOW_ITEM_ALERT,
} from './actions'

const reducer = (state, action) => {
	if (action.type === ADD_ITEM) {
		const newItem = {
			id: new Date().getTime().toString(),
			title: action.payload,
			cost: '?',
		}
		return {
			...state,
			itemList: [...state.itemList, newItem],
			alert: {
				show: true,
				msg: 'продукт добавлен!',
				type: 'success',
			},
		}
	}
	if (action.type === SHOW_ITEM_ALERT) {
		return {
			...state,
			alert: { show: false, msg: '', type: '' },
		}
	}
	return state
}

export default reducer
