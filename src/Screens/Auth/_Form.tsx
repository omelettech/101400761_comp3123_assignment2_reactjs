import React, {SetStateAction} from "react";


interface AuthFormProps{
    label:string
    username:string
    setUsername:React.Dispatch<React.SetStateAction<string>>
    password:string
    setPassword:React.Dispatch<React.SetStateAction<string>>

}
export default function AuthForm({label,username,password,setUsername,setPassword}:AuthFormProps){
    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            width:"fit-content",
            padding:20,

            justifyContent:"center",
            borderRadius:10,
            backgroundColor:"#eee8e8"
        }}>
            <h2>{label}</h2>
            <p>Username</p>
            <input
                value={username}
                onChange={(val)=>setUsername(val.target.value)}
            />
            <p>Password</p>
            <input
                type={"password"}
                value={password}
                onChange={(val)=>setPassword(val.target.value)}
            />
        </div>


    )
}