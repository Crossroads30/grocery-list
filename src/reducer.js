import {
	TOGGLE_AMOUNT,
	ADD_ITEM,
	SHOW_ITEM_ALERT,
	REMOVE_ITEM,
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
	if (action.type === REMOVE_ITEM) {
		let newList = state.itemList.filter(item => item.id !== action.payload)
		return {
			...state,
			itemList: newList,
		}
	}
	return state
}

export default reducer
