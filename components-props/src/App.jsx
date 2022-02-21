import './App.css'
import Profile from './components/Profile'

function App() {

  const user = {
    name: 'Rick',
    email: 'rick@c-137.com',
    picture: ''
  }

  return (
    <Profile data={user} />
  )
}

export default App
