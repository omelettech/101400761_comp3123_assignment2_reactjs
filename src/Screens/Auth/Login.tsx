import React, {useState} from "react";
import AuthForm from "./_Form";

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const clearInputs = () => {
        setUsername("")
        setPassword("")

    }

    return (
        <>
            <div>
                <AuthForm username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>
            </div>
        </>
    )
}

