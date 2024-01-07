import Alert from "./Alert"

const GroceryForm = () => {
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
