import { useGlobalContext } from '../context'
import GroceryList from './GroceryList'


const Grocery = ({
	editItem,
	editPrice,
	id,
}) => {
	const { itemList, removeList } = useGlobalContext()
	return (
		<>
			{itemList.length > 0 && (
				<div className='grocery-container'>
					<GroceryList
						editItem={editItem}
						editPrice={editPrice}
						id={id}
					/>
					<button onClick={removeList} type='button' className='clear-btn'>
						очистить список
					</button>
				</div>
			)}
		</>
	)
}
export default Grocery
