import Button from './Button'
import { useGlobalContext } from './context'

const Footer = () => {
	const { total, removeList, itemList } = useGlobalContext()
	return (
		<>
			{itemList.length > 0 && (
				<footer className='footer'>
					<hr />
					<div className='cart-total'>
						<h4>
							сумма <span>{total}р.</span>
						</h4>
					</div>
					<Button click={removeList} type='button' classname='clear-btn'>
						очистить список
					</Button>
				</footer>
			)}
		</>
	)
}
export default Footer
