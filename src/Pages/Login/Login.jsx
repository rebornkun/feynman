import { useContext, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Components/UserContext';
import FeynmanDataService from '../../services/feynman';
import './Login.css'


const Login = ({set}) => {

    const { user, setUser, SignedIn, setSignedIn } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{

    }, [user])

    const LoginUser = () => {
        let emailfield = document.getElementById('emailinput')
        let password = document.getElementById('signin_password')
        let loadingtext = document.getElementById('loading')

        let userdetails = {
            name: emailfield.value,
            password: password.value
        } 

        loadingtext.innerHTML = "Loading please wait ..."
        loadingtext.style.display = 'block'

        // login user
        FeynmanDataService.loginUser(userdetails)
        .then((response) => {
            let user_id = response.data._id

            // get user topics if any
            FeynmanDataService.get(user_id)
            .then((res) => {
                setUser({...userdetails, id: user_id, topics: res.data})
            })
            
            //sign in user and navigate to dashboard
            setSignedIn(true)
            navigate(`/dashboard/${response.data._id}`)
                
            
        }).catch((err) => {
            console.log(err)
            loadingtext.innerHTML = "error"
        })

        
    }


    return (
        <div className='login'>
            <div className='login_container'>
                <h1>Login</h1>
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