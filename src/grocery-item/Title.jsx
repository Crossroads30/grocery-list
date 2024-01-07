import { GiCircle } from 'react-icons/gi'
import { ImCheckmark } from 'react-icons/im'

const Title = ({ showMarks }) => {
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
			<p className={showMarks ? 'title complete' : 'title'}>title</p>
		</div>
	)
}
export default Title
