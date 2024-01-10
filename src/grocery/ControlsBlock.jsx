import Amount from './controls/Amount'
import Buttons from './controls/Buttons'

const ControlsBlock = ({ id, amount }) => {
	return (
		<div className='btn-amount-wrapper'>
			<Buttons id={id} />
			<Amount id={id} amount={amount} />
		</div>
	)
}
export default ControlsBlock
