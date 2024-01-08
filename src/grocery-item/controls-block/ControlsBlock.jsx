import Amount from './Amount'
import Buttons from './Buttons'

const ControlsBlock = ({ id, amount }) => {
	return (
		<div className='btn-amount-wrapper'>
			<Buttons id={id} />
			<Amount id={id} amount={amount} />
		</div>
	)
}
export default ControlsBlock
