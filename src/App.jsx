import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/StaffDirectory.jsx'


const StaffList = [
{
  firstName: 'Jordan',
  lastName: 'Sangalang',
  title: 'Junior Developer',
  yearStarted: '1986',
}, 
{
  firstName: 'Rayshawn',
  lastName: 'Jones',
  title: 'Junior Developer',
  yearStarted: '1993',
},

StaffListHandler = () => {

]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Company History</h1>  
    {StaffList.map((staff, index) => (
      <StaffListItem 
      key={index} 
      staff={staff}
      />
    )
    )
    }
    </>
  )
}

export default App
