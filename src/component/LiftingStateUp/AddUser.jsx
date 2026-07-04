import { useState } from "react";

function AddUser({setUser}){

    

    return <>
        <input type="text" onChange={(event)=>setUser(event.target.value)}/>
        
    </>

}

export default AddUser;