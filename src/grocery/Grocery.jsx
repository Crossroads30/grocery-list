import GroceryList from './GroceryList'

const Grocery = () => {
	return (
		<>
			{list.length > 0 && (
				<div className='grocery-container'>
					<GroceryList
						list={list}
						removeItem={removeItem}
						editItem={editItem}
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
