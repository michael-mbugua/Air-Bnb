import React from 'react'
import './Login.css'

function Login() {
    return (
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Username :</label>
            <input type="text" class="form-control" placeholder="Enter Your Name"/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">email  :</label>
            <input type="email" class="form-control" id="exampleInputPassword1" placeholder="mike@gmail.com"/>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
    )
}

export default Login