import React from 'react'
import "../Styles/login.css"

const Login = () => {
    return (
        <div className='login_wrapper'>
            <div className="login_tittle">
                <h1>Sing in</h1>
                <form action="#">
                    <div className="input_box">
                        <input type="email" required className='input' />
                        <label >Email</label>
                    </div>
                    <div className="input_box">
                        <input type="password" required  className='input'/>
                        <label >Password</label>
                    </div>
                    <div className="remember_forget">
                        <label ><input type="checkbox" /> Remember me</label>
                        <a href="#"> Forget Password</a>
                    </div>
                    <button type='submit' className='btn'> Login</button>
                    <div className="login_register">
                        <p> Don't have an account?<a href="#" className='register_link'>Register</a></p></div>
                </form>
            </div>
        </div>
    )
}

export default Login;
