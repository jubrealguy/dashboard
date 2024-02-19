import React from "react"
import './Login.css'

const Login = () => {
    return (
        <React.Fragment>
            <p>Login to access the full dashboard</p>
            <form>
            <div>
                <label for='email'>Email: </label>
                <input type='email' id='email' name='email' />
            </div>
            <div>
                <label for='password'>Password: </label>
                <input type='password' id='password' name='password' />
            </div>
            <button>OK</button>
            </form>
        </React.Fragment>
    )
}

export default Login