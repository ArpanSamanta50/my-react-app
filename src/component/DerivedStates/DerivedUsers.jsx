import { useReducer, useRef, useState } from "react"

function DerivedUsers(){
    const [users,setUsers]=useState([])
    const inputRef=useRef(null)

    const uniqueUsers=[...new Set(users)].length

    const handleButtonClick=()=>{
        const currentUser=inputRef.current.value
        setUsers(users => [...users, currentUser])
    }

    return <>

        <div>
            <h2>Total Users: {users.length}</h2>
            <h2>Current User: {users[users.length-1]}</h2>
            <h2>Unique Users: {uniqueUsers}</h2>
            
        </div>

        <div>
            <input type="text" placeholder="please enter user name" ref={inputRef}/>
            <button onClick={handleButtonClick}>submit</button>
        </div>


        <div>
            {
                users.map(
                    (item, index)=>(<p key={index}>{item}</p>) 
                )
            }
        </div>
       
    </>
}

export default DerivedUsers;