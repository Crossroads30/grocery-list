import {
	TOGGLE_AMOUNT,
	ADD_ITEM,
	SHOW_ITEM_ALERT,
	REMOVE_ITEM,
	REMOVE_LIST,
	EDIT_ITEM,
	GET_NAME,
	EDIT_ITEM_LIST,
	GET_PRICE,
	EDIT_PRICE,
	SHOW_DANGER_ALERT,
	GET_TOTAL,
} from './actions'

const reducer = (state, action) => {
	if (action.type === ADD_ITEM) {
		const newItem = {
			id: new Date().getTime().toString(),
			title: action.payload,
			cost: 0,
			amount: 1,
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

	if (action.type === SHOW_DANGER_ALERT) {
		return {
			...state,
			alert: {
				show: action.payload.show,
				msg: action.payload.msg,
				type: action.payload.type,
			},
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
		return {
			...state,
			isPriceEditing: false,
			isNameEditing: true,
			editId: itemOnEdit.id,
			itemName: itemOnEdit.title,
		}
	}

	if (action.type === EDIT_PRICE) {
		let itemOnEdit = state.itemList.find(item => item.id === action.payload)
		// console.log(itemOnEdit)
		return {
			...state,
			isNameEditing: false,
			isPriceEditing: true,
			editId: itemOnEdit.id,
			itemPrice: itemOnEdit.cost,
			itemName: '',
		}
	}

	if (action.type === GET_NAME) {
		return {
			...state,
			itemName: action.payload,
		}
	}

	if (action.type === GET_PRICE) {
		return {
			...state,
			itemPrice: action.payload,
		}
	}

	if (action.type === EDIT_ITEM_LIST) {
		if (state.isNameEditing) {
			return {
				...state,
				itemList: action.payload,
				alert: {
					show: true,
					msg: 'исправлено!',
					type: 'success',
				},
				itemName: '',
				isNameEditing: false,
			}
		}
		if (state.isPriceEditing) {
			return {
				...state,
				itemList: action.payload,
				alert: {
					show: true,
					msg: 'цена добавлена!',
					type: 'success',
				},
				itemPrice: '',
				isPriceEditing: false,
			}
		}
	}

	if (action.type === TOGGLE_AMOUNT) {
		
		let tempList = state.itemList
			.map(listItem => {
				if (listItem.id === action.payload.id) {
					if (action.payload.type === 'increase') {
						return { ...listItem, amount: listItem.amount + 1 }
					}
					if (action.payload.type === 'decrease') {
						if (listItem.amount > 1) {
							return { ...listItem, amount: listItem.amount - 1 }
						}
						return { ...listItem }
					}
				}
				return listItem
			})
			// .filter(listItem => listItem.amount !== 0)
		return {
			...state,
			itemList: tempList,
		}
	}

		if (action.type === GET_TOTAL) {
			let { total, amount } = state.itemList.reduce(
				(listTotal, listItem) => {
					const { cost, amount } = listItem
					// console.log(cost, amount)
					const itemTotalPrice = cost * amount // if we increase count of item we multiply their price by number of items

					listTotal.total += itemTotalPrice
					listTotal.amount += amount
					// console.log(listTotal)
					return listTotal
				},
				{
					total: 0,
					amount: 0,
				}
			)
			total = parseFloat(total.toFixed(2)) // fix numbers after dot
			return {
				...state,
				total,
				amount,
			}
		}
	return state
}

export default reducer
