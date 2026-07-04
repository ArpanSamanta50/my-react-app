import { useState } from "react";
import AddUser from "./AddUser";
import ShowUser from "./ShowUser";

function Parent(){

    const [user, setUser]=useState();

    return <>
        <div>
            <AddUser setUser={setUser}/>
            <ShowUser user={user}/>
        </div>
    </>
    
}


export default Parent