import React, { useContext, useEffect, useReducer, useRef } from 'react'
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
	PRICE_FOCUS_LOST,
	PRODUCT_FOCUS_LOST,
} from './utils/actions'
import reducer from './utils/reducer'

const AppContext = React.createContext()

const getLocalStorage = () => {
	let itemList = localStorage.getItem('itemList')
	if (itemList) {
		return (itemList = JSON.parse(localStorage.getItem('itemList')))
	} else {
		return []
	}
}

const initialState = {
	itemList: getLocalStorage(),
	itemName: '',
	itemPrice: 0,
	total: 0,
	amount: 0,
	isNameEditing: false,
	isPriceEditing: false,
	editId: null,
	alert: {
		show: false,
		msg: '',
		type: '',
	},
}

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	// console.log(state)

	const inputRef = useRef(null)

	const editItem = id => {
		dispatch({ type: EDIT_ITEM, payload: id })
	}

	const editPrice = id => {
		dispatch({ type: EDIT_PRICE, payload: id })
	}

	const removeList = () => {
		dispatch({ type: REMOVE_LIST })
	}

	const removeItem = id => {
		dispatch({ type: REMOVE_ITEM, payload: id })
	}

	const toggleAmount = (id, type) => {
		dispatch({ type: TOGGLE_AMOUNT, payload: { id, type } })
	}

	const addItem = name => {
		dispatch({ type: ADD_ITEM, payload: name })
	}

	const getName = e => {
		dispatch({ type: GET_NAME, payload: e })
	}

	const getPrice = e => {
		dispatch({ type: GET_PRICE, payload: e })
	}

	const editItemList = list => {
		dispatch({ type: EDIT_ITEM_LIST, payload: list })
	}

	const showDangerAlert = (show, msg, type) => {
		dispatch({ type: SHOW_DANGER_ALERT, payload: { show, msg, type } })
	}

	const editPriceFocusLost = () => {
		dispatch({ type: PRICE_FOCUS_LOST })
	}
	const editProductFocusLost = () => {
		dispatch({ type: PRODUCT_FOCUS_LOST })
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch({ type: SHOW_ITEM_ALERT })
		}, 2000)
		return () => clearTimeout(timeout)
	}, [state.itemList])

	useEffect(() => {
		localStorage.setItem('itemList', JSON.stringify(state.itemList))
	}, [state.itemList])

	useEffect(() => {
		dispatch({ type: GET_TOTAL })
	}, [state.itemList])

	return (
		<AppContext.Provider
			value={{
				...state,
				toggleAmount,
				addItem,
				removeItem,
				removeList,
				editItem,
				getName,
				editItemList,
				getPrice,
				editPrice,
				showDangerAlert,
				editPriceFocusLost,
				editProductFocusLost,
				inputRef,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }
