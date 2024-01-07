import React, { useContext, useReducer } from 'react'
import { TOGGLE_AMOUNT } from './actions'

const AppContext = React.createContext()

const initialState = {
	total: 0,
	amount: 0,
}

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer()

	return <AppContext.Provider value={'hello'}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }
