import { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Landing from '../Pages/Landing/Landing'
import Login from '../Pages/Login/Login'
import {UserContext} from '../Components/UserContext'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Register from '../Pages/Register/Register'

function App() {

  const intialUser = {
    name: '',
    password: '',
    id: null,
    topics: [],
    SignedIn: false
  }

  const [ user, setUser ] = useState(intialUser)
  const [ SignedIn, setSignedIn ] = useState(false)
  const [ currentTopic, setCurrentTopic ] = useState()
  const [ modalType, setModalType ] = useState('')

  useEffect(()=>{
    console.log('SignedIn from app js')
  },[user, SignedIn, currentTopic])
  console.log('user: ', user)

  return (
    <UserContext.Provider value={{ user, setUser, SignedIn, setSignedIn, intialUser, currentTopic, setCurrentTopic, modalType, setModalType }}>
      <div className="App">
        <nav>
            <NavBar />
        </nav>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/dashboard'>
              <Route index path=':id' element={<Dashboard />}/>
            </Route>
            <Route path='*' />
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default App
