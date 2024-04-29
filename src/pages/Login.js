import React from "react";
import Navbar from "../components/NavBar";

function Login (){
<>
<header>
<Navbar/>
</header>
<main>
    <h1>Login</h1>
    <form>
        <div>
            <label for ="username">Username</label>
            <input id="username" type="password" placeholder="Password"/>
        </div>
        <br/>
        <div>
            <label for="password">Password</label>
            <input id="password" type="password" name="password" placeholder="Password"/>
        </div>
        <br/>
        <button type="submit">Submit</button>
    </form>
</main>
</>
}
export default Login;

