import { useState } from 'react'; 
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './login.css';
import { FcGoogle } from "react-icons/fc";


function LoginRegister() {
    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction('active');
    }

    const loginLink = () => {
        setAction('');
    }

    const handleGoogleSignIn = () => {
        // Handle Google sign-in logic here
        console.log('Sign in with Google clicked');
    }

    return (
        <div id='body'>
            <div className='login-form-container'>
                <div className={`wrapper ${action}`}>
                    <div className="form-box login">
                        <form action="">
                            <h1>Login</h1>
                            <div className="input-box">
                                <input type="text" placeholder='Username' required />
                                <FaUser className='icon'/>
                            </div>
                            <div className="input-box">
                                <input type="password" placeholder='Password' required />
                                <FaLock className='icon'/>
                            </div>
                            <div className="remember-forgot">
                                <label><input type="checkbox" />Remember me</label>
                                <a href="#">Forgot password?</a>
                            </div>
                            <button className="button" type="submit">Login</button>
                            <div className="register-link">
                                <p>Don't have an account? 
                                    <a href="#" onClick={registerLink}>Register</a>
                                </p>
                                <br></br>
                                <hr></hr>
                                <br></br>
                            <button type="button" onClick={handleGoogleSignIn}>
                                <FcGoogle className='g-logo'/>{"  "} Sign in with Google</button>
                            </div>
                        </form>
                    </div>

                    <div className="form-box register">
                        <form action="">
                            <h1>Register</h1>
                            <div className="input-box">
                                <input type="text" placeholder='Username' required />
                                <FaUser className='icon'/>
                            </div>
                            <div className="input-box">
                                <input type="email" placeholder='Email' required />
                                <IoMdMail className='icon'/>
                            </div>
                            <div className="input-box">
                                <input type="password" placeholder='Password' required />
                                <FaLock className='icon'/>
                            </div>
                            <div className="remember-forgot">
                                <label><input type="checkbox" />I agree to the terms & conditions</label>
                            </div>
                            <button className="button" type="submit">Register</button>
                            <div className="register-link">
                                <p>Already have an account? 
                                    <a href="#" onClick={loginLink}>Login</a>
                                </p>
                                <br></br>
                                <hr></hr>
                                <br></br>
                            <button type="button" className='g' onClick={handleGoogleSignIn}>

                                <FcGoogle className='g-logo'/>Continue with Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;
