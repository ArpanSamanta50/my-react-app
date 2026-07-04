import { useState } from "react";

function UpdatingStates(){

    const [userDetails,setUserDetails]=useState(
        {
            name:"Arpan Samanta",
            address:{
                vill: "meghsar",
                District: "Hooghly",
                PIN: 712149
            }
        }
    );

    const handleNameChange=(event)=>{
        const name=event.target.value
        setUserDetails({...userDetails, name:event.target.value})
    }

    const handleUpdateVillage=(event)=>{
        console.log(event.target.value)
        const village=event.target.value

        setUserDetails({...userDetails, address:{...userDetails.address, vill:village}})
    }



    return <>
        <input type="text" placeholder="update name" onChange={(event)=>handleNameChange(event)}/>

        <br />

        <input type="text" placeholder="update village" onChange={(event)=>handleUpdateVillage(event)}/>

        <div>
            <h3>user name: {userDetails.name}</h3>
            <h3>Addresses: </h3>
            <h4>user village: {userDetails.address.vill}</h4>
            <h4>User District: {userDetails.address.District}</h4>
            <h4>User PIN: {userDetails.address.PIN}</h4>
        </div>
    </>
}


export default UpdatingStates;