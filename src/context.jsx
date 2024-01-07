import React, { useContext, useEffect, useReducer } from 'react'
import { TOGGLE_AMOUNT, DISPLAY_ITEMS } from './actions'
import reducer from './reducer'

const AppContext = React.createContext()

  const getLocalStorage = () => {
		let list = localStorage.getItem('list')
		if (list) {
			return (list = JSON.parse(localStorage.getItem('list')))
		} else {
			return []
		}
	}

const initialState = {
  list: [],
	total: 0,
	amount: 0,
}

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state)

  	const toggleAmount = (id, type) => {
			dispatch({ type: TOGGLE_AMOUNT, payload: { id, type } })
		}

    const getList = () => {
      const list = getLocalStorage()
      dispatch({ type: DISPLAY_ITEMS, payload: list })
    }
    
    useEffect(() => {
      getList()
    }, [])

    useEffect(() => {
      localStorage.setItem('list', JSON.stringify(state.list)) 
    }, [state.list])


	return (
		<AppContext.Provider value={toggleAmount}>{children}</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }
