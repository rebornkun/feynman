import { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Landing from '../Pages/Landing/Landing'
import Login from '../Pages/Login/Login'
import {UserContext} from '../Components/UserContext'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard'

function App() {

  const intialUser = {
    name: '',
    password: ''
  }

  const [ user, setUser ] = useState(intialUser)
  const [ SignedIn, setSignedIn ] = useState(false)

  


  useEffect(()=>{
    console.log(SignedIn)
  },[SignedIn])
  console.log(user)

  return (
    <UserContext.Provider value={{ user, setUser, SignedIn, setSignedIn, intialUser }}>
      <div className="App">
        <nav>
            <NavBar />
        </nav>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/dashboard'>
              <Route index path=':id' element={<Dashboard />}/>
            </Route>
            
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default App
