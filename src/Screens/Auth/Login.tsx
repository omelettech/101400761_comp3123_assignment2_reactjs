import React, {useState} from "react";
import AuthForm from "./_Form";
import {Link} from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const clearInputs = () => {
        setUsername("")
        setPassword("")

    }

    return (
        <>
                <AuthForm label={"Login"} username={username} setUsername={setUsername} password={password} setPassword={setPassword}>
                    <p>Dont have an account? <Link to={"/register"}>Register</Link></p>
                </AuthForm>
        </>
    )
}

