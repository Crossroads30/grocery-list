import GroceryList from './GroceryList'

const Grocery = ({ list, removeItem, editItem, clearList, id }) => {
	return (
		<>
			{list.length > 0 && (
				<div className='grocery-container'>
					<GroceryList
						list={list}
						removeItem={removeItem}
						editItem={editItem}
						id={id}
					/>
					<button onClick={clearList} type='button' className='clear-btn'>
						очистить список
					</button>
				</div>
			)}
		</>
	)
}
export default Grocery
