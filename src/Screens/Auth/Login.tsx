import React, {useState} from "react";

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

            </div>
        </>
    )
}

