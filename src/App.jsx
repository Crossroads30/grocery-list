import './App.css'
import Footer from './Footer'
import GroceryForm from './GroceryForm'
import Grocery from './grocery/Grocery'

function App() {
	return (
		<section className='section-center'>
			<GroceryForm />
			<Grocery />
			<Footer />
		</section>
	)
}

export default App
