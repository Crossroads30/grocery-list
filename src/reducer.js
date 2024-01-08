import {
	TOGGLE_AMOUNT,
	ADD_ITEM,
	SHOW_ITEM_ALERT,
	REMOVE_ITEM,
	REMOVE_LIST,
	EDIT_ITEM,
	GET_NAME,
	EDIT_ITEM_LIST,
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
			itemName: '',
		}
	}
	if (action.type === SHOW_ITEM_ALERT) {
		return {
			...state,
			alert: { show: false, msg: '', type: '' },
		}
	}
	if (action.type === REMOVE_LIST) {
		return {
			...state,
			itemList: [],
		}
	}
	if (action.type === REMOVE_ITEM) {
		let newList = state.itemList.filter(item => item.id !== action.payload)
		return {
			...state,
			itemList: newList,
		}
	}
	if (action.type === EDIT_ITEM) {
		let itemOnEdit = state.itemList.find(item => item.id === action.payload)
		console.log(itemOnEdit)
		return {
			...state,
			isEditing: true,
			editId: itemOnEdit.id,
			itemName: itemOnEdit.title,
		}
	}
	if (action.type === GET_NAME) {
		return {
			...state,
			itemName: action.payload,
		}
	}
	if (action.type === EDIT_ITEM_LIST) {
		return {
			...state,
			itemList: action.payload,
			alert: {
				show: true,
				msg: 'исправлено!',
				type: 'success',
			},
			itemName: '',
			isEditing: false,
		}
	}
	return state
}

export default reducer
