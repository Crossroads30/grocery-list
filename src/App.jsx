import React, { useState, useEffect } from 'react'
import Alert from './Alert'
import GroceryList from './grocery/GroceryList'
import './App.css'
import GroceryForm from './GroceryForm'
import Grocery from './grocery/Grocery'

const getLocalStorage = () => {
	let list = localStorage.getItem('list')
	if (list) {
		return (list = JSON.parse(localStorage.getItem('list')))
	} else {
		return []
	}
}

function App() {
	const [name, setName] = useState('')
	const [price, setPrice] = useState(null)
	const [isEditPrice, setIsEditPrice] = useState(false)
	const [list, setList] = useState(getLocalStorage())
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
		const newList = list.filter(item => item.id !== id)
		showAlert(true, 'продукт удален!', 'danger')
		// setList(list.filter(item => item.id !== id))
		setList(newList)
	}

	const editItem = id => {
		const editingItem = list.find(item => item.id === id)
		setIsEditing(true)
		setEditId(id)
		setName(editingItem.title)
	}

	const editPrice = id => {
		const editingPrice = list.find(item => item.id === id)
		console.log('Price edited!')
		setIsEditPrice(true)
	}

	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list))
	}, [list])

	return (
		<section className='section-center'>
			<GroceryForm
				name={name}
				setName={setName}
				isEditing={isEditing}
				setIsEditing={setIsEditing}
				showAlert={showAlert}
				alert={alert}
				setList={setList}
				list={list}
				editId={editId}
				setEditId={setEditId}
				setPrice={setPrice}
				isEditPrice={isEditPrice}
			/>
			<Grocery
				list={list}
				removeItem={removeItem}
				editItem={editItem}
				clearList={clearList}
				editPrice={editPrice}
			/>
		</section>
	)
}

export default App
