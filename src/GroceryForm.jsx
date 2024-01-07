import Alert from './Alert'

const GroceryForm = ({
	isEditing,
	showAlert,
	setList,
	list,
	name,
	setName,
	setIsEditing,
	editId,
	setEditId,
	alert,
}) => {
	const handleSubmit = e => {
		e.preventDefault()
		if (!name) {
			// show alert
			showAlert(true, 'пожалуйста добавьте продукт', 'danger')
		} else if (name && isEditing) {
			// deal with edit
			setList(
				list.map(item => {
					if (item.id === editId) {
						return { ...item, title: name }
					}
					return item
				})
			)
			setName('')
			setEditId(null)
			setIsEditing(false)
			showAlert(true, 'исправлено!', 'success')
		} else {
			showAlert(true, 'продукт добавлен!', 'success')
			const newItem = { id: new Date().getTime().toString(), title: name }
			setList([...list, newItem])
		}
		setName('')
	}

	return (
		<form className='grocery-form' onSubmit={handleSubmit}>
			{alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
			<h3>список продуктов</h3>
			<div className='form-control'>
				<input
					placeholder='Добавьте продукты'
					type='text'
					className='grocery'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<button className='submit-btn' type='submit'>
					{isEditing ? 'исправить' : 'добавить'}
				</button>
			</div>
		</form>
	)
}
export default GroceryForm
