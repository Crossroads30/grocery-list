import './App.css'
import Footer from './Footer'
import GroceryForm from './GroceryForm'
import Header from './Header'
import Grocery from './grocery/Grocery'

function App() {
	return (
		<section className='section-center'>
			<Header />
			<GroceryForm />
			<Grocery />
			<Footer />
		</section>
	)
}

export default App
