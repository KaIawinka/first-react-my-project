import './App.css'
import MyComponent from './About'

function App() {
	let title = "Apple"
  return (
    <>
				<h2 style={{color: "gray", fontSize: "50px"}}>{title}</h2>
				<MyComponent></MyComponent>
		</>
  )
}

export default App