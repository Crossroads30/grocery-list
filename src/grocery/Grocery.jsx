import { useGlobalContext } from '../context'
import GroceryList from './GroceryList'


const Grocery = ({
	list,
	removeItem,
	editItem,
	clearList,
	editPrice,
	id,
}) => {
	const {itemList} = useGlobalContext()
	return (
		<>
			{itemList.length > 0 && (
				<div className='grocery-container'>
					<GroceryList
						list={list}
						removeItem={removeItem}
						editItem={editItem}
						editPrice={editPrice}
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
