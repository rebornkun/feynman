import axios from 'axios';
import { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Components/UserContext';
import FeynmanDataService from '../../services/feynman';
import './Register.css'


const Register = ({set}) => {

    const { user, setUser, SignedIn, setSignedIn } = useContext(UserContext)
    const navigate = useNavigate()

    const RegisterUser = () => {
        let emailfield = document.getElementById('emailinput')
        let password = document.getElementById('signin_password')
        let loadingtext = document.getElementById('loading')

        let userdetails = {
            name: emailfield.value,
            password: password.value
        } 
        
        console.log(userdetails)
        setUser({...userdetails})

        var data = {
            name: userdetails.name,
            password: userdetails.password,
        }

        loadingtext.innerHTML = "Loading please wait ..."
        loadingtext.style.display = 'block'

        // register user
        FeynmanDataService.registerUser(data)
        .then((response) => {

            //login user after succesful registration
            FeynmanDataService.loginUser(data).then((response) => {

                let user_id = response.data._id

                // get user topics if any
                FeynmanDataService.get(user_id)
                .then((res) => {
                    setUser({...userdetails, id: user_id, topics: res.data})
                })
                
                //sign in user and navigate to dashboard
                setSignedIn(true)
                navigate(`/dashboard/${response.data._id}`)

            })
            .catch(err => loadingtext.innerText = `error: ${err}`)
        })
        .catch(err => loadingtext.innerText = `error: ${err}`)
        

    }


    return (
        <div className='Register'>
            <div className='Register_container'>
                <h1>Register</h1>
                <div className="inputs">
                    <div className="emailfield">
                        <p>UserName</p>
                        <input 
                        id='emailinput'
                        type='email'
                        autoComplete="email"
                        max={10}
                        />
                    </div>
                    <div className="passwordfield">
                        <p>Password</p>
                        <input 
                        id="signin_password"
                        type='password'
                        autocomplete="current-password"
                        autoCorrect={false}
                        />
                    </div>
                </div>
                <div className="siginpage_signin_button" onClick={RegisterUser}>
                    <p>Register</p>
                </div>
                <p id='loading' className='loading'>Loading please wait...</p>
            </div>
        </div>
    );
}

export default Register;