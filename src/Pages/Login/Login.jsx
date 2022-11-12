import { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Components/UserContext';
import './Login.css'


const Login = ({set}) => {

    const { user, setUser, SignedIn, setSignedIn } = useContext(UserContext)
    const navigate = useNavigate()

    const LoginUser = () => {
        let emailfield = document.getElementById('emailinput')
        let password = document.getElementById('signin_password')
        let loadingtext = document.getElementById('loading')

        let userdetails = {
            name: emailfield.value,
            password: password.value
        } 
        
        console.log(userdetails)
        setUser({...userdetails})
        
        loadingtext.style.display = 'block'

        setTimeout(()=>{
            setSignedIn(true)
            navigate(`/dashboard/${user.id}`)
        }, 3000)
    }


    return (
        <div className='login'>
            <div className='login_container'>
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
                <div className="siginpage_signin_button" onClick={LoginUser}>
                    <p>Sign in</p>
                </div>
                <p id='loading' className='loading'>Loading please wait...</p>
            </div>
        </div>
    );
}

export default Login;