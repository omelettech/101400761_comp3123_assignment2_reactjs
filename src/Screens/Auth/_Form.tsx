

interface AuthFormProps{
    username:string
    setUsername:()=>void
    password:string
    setPassword:()=>void

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
                onChange={setUsername}
            />
            <input
                value={password}
                onChange={setPassword}
            />
        </div>


    )
}