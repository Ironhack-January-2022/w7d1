import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// React Components
// Functional Component
function Greeting({ user, dimension }) {
  // console.log(props)
  return <h1>Hello {user} from {dimension}</h1>
}

// Class Component 
// class Greeting extends Component {
//   render() {
//     console.log(this.props)
//     return <h1>Hello from the class component</h1>
//   }
// }

// ReactDOM.render(
//   <>
//     <Greeting user='Rick' dimension='C-137' />
//     <Greeting user='Morty' dimension='C-137' />
//     <Greeting user='Summer' dimension='C-137' />
//   </>,
//   document.getElementById('root')
// )

ReactDOM.render(
  <App />,
  document.getElementById('root')
)