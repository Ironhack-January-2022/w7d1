import './App.css'
import Profile from './components/Profile'

function App() {

  const user = {
    name: 'Morty',
    email: 'rick@c-137.com',
    picture: 'https://i.imgur.com/GjfXzVU.jpeg'
  }

  return (
    <Profile data={user} />
  )
}

export default App
