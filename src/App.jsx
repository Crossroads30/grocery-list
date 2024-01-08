import React, { useState, useEffect } from 'react'
import './App.css'
import GroceryForm from './GroceryForm'
import Grocery from './grocery/Grocery'
import { useGlobalContext } from './context'

// const getLocalStorage = () => {
// 	let list = localStorage.getItem('list')
// 	if (list) {
// 		return (list = JSON.parse(localStorage.getItem('list')))
// 	} else {
// 		return []
// 	}
// }

function App() {
	const {itemList} = useGlobalContext()

	
	const [price, setPrice] = useState('')
	const [isEditPrice, setIsEditPrice] = useState(false)
	// const [list, setList] = useState(itemList)
	const [isEditing, setIsEditing] = useState(false)
	const [editId, setEditId] = useState(null)
	const [alert, setAlert] = useState({
		show: false,
		msg: '',
		type: '',
	})
	
	const showAlert = (show = false, msg = '', type = '') => {
		setAlert({ show, msg, type }) //(ES6 feature) if value is equal to param we just can skip this construction: 'show: show, msg: msg, type: type', and pass only one word
	}

	const clearList = () => {
		showAlert(true, 'список очищен!', 'danger')
		setList([])
	}

	const removeItem = id => {
		setPrice('')
		setName('')
		setIsEditPrice(false)
		setIsEditing(false)
		const newList = list.filter(item => item.id !== id)
		showAlert(true, 'продукт удален!', 'danger')
		// setList(list.filter(item => item.id !== id))
		setList(newList)
	}

	const editItem = id => {
		// setPrice('')
		// setIsEditPrice(false)
		const editingItem = list.find(item => item.id === id)
		setIsEditing(true)
		setEditId(id)
		setName(editingItem.title)
	}

	const editPrice = id => {
		const editingPrice = list.find(item => item.id === id)
		setIsEditPrice(true)
		setEditId(id)
		setPrice(editingPrice.cost)
	}

	// useEffect(() => {
	// 	localStorage.setItem('list', JSON.stringify(list))
	// }, [list])

	return (
		<section className='section-center'>
			<GroceryForm
				// name={name}
				// setName={setName}
				price={price}
				setPrice={setPrice}
				isEditing={isEditing}
				setIsEditing={setIsEditing}
				isEditPrice={isEditPrice}
				setIsEditPrice={setIsEditPrice}
				editId={editId}
				setEditId={setEditId}
				// list={list}
				// setList={setList}
				alert={alert}
				showAlert={showAlert}
			/>
			<Grocery
				// list={list}
				removeItem={removeItem}
				editItem={editItem}
				clearList={clearList}
				editPrice={editPrice}
			/>
		</section>
	)
}

export default App
