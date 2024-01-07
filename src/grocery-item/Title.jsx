import { GiCircle } from 'react-icons/gi'
import { ImCheckmark } from 'react-icons/im'

const Title = ({ showMarks, title, setShowMarks, price }) => {
	return (
		<div className='title-container'>
			<button
				onClick={() => {
					setShowMarks(!showMarks)
				}}
				className='mark-btn'
				type='button'
			>
				{showMarks ? (
					<ImCheckmark style={{ color: '#3d9e3d' }} />
				) : (
					<GiCircle />
				)}
			</button>
			<div className='title-price-wrapper'>
				<p className={showMarks ? 'title complete' : 'title'}>{title}</p>
				<p className='title'>цена:{price}</p>
			</div>
		</div>
	)
}
export default Title
