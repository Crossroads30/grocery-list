import React, { useContext, useEffect, useReducer } from 'react'
import {
	TOGGLE_AMOUNT,
	DISPLAY_ITEMS,
	ADD_ITEM,
	SHOW_ITEM_ALERT,
	REMOVE_ITEM,
	REMOVE_LIST,
} from './actions'
import reducer from './reducer'

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
	total: 0,
	amount: 0,
	alert: {
		show: false,
		msg: '',
		type: '',
	},
}

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	// console.log(state.itemList)

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

	const showItemAlert = () => {
		dispatch({ type: SHOW_ITEM_ALERT })
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			showItemAlert()
		}, 2000)
		return () => clearTimeout(timeout)
	}, [state.itemList])

	useEffect(() => {
		localStorage.setItem('itemList', JSON.stringify(state.itemList))
	}, [state.itemList])

	return (
		<AppContext.Provider
			value={{ ...state, toggleAmount, addItem, removeItem, removeList }}
		>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }
