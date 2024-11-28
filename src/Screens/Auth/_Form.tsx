import React, {SetStateAction} from "react";


interface AuthFormProps{
    username:string
    setUsername:React.Dispatch<React.SetStateAction<string>>
    password:string
    setPassword:React.Dispatch<React.SetStateAction<string>>

}
export default function AuthForm({username,password,setUsername,setPassword}:AuthFormProps){
    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:10,
            backgroundColor:"#eee8e8"
        }}>
            <input
                value={username}
                onChange={(val)=>setUsername(val.target.value)}
            />
            <input
                type={"password"}
                value={password}
                onChange={(val)=>setPassword(val.target.value)}
            />
        </div>


    )
}