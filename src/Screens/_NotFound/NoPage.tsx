import {Link} from "react-router-dom";


export default function NoPage(){
    return(
        <>
        <div style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <p>No such path exist</p>
            <Link to={"/"}>Go back home</Link>
        </div>
        </>

    )
}