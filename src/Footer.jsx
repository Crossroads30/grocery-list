import { useGlobalContext } from "./context"

const Footer = () => {
  const { total, removeList } = useGlobalContext()
  return (
		<footer className='footer'>
			<hr />
			<div className='cart-total'>
				<h4>
					сумма <span>{total}р.</span>
				</h4>
			</div>
			<button onClick={removeList} type='button' className='clear-btn'>
				очистить список
			</button>
		</footer>
	)
}
export default Footer