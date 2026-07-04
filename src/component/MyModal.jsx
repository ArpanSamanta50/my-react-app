import { useContext, useEffect, useState } from 'react';
import { Context } from '../store/ContextAPI.jsx';
import './Modal.css'

function MyModal({onClose}){

    const cartContext=useContext(Context)
    const [state, setState]=useState(0);

    useEffect(
        ()=>{
            console.log(state);
        },[]
    )

    function handleClick()
    {
        setState(s=>(s+1))
    }

    console.log(cartContext.items)
    return <>
        <dialog className="my-modal" open>
            <h1>Ram Chandra</h1>
            <h2>prabhu Sri Krishna</h2>
            <div>
                cart items: {cartContext.items.length}
            </div>
            <div>
                <p>my counter : {state}</p>
                <button onClick={handleClick}>click </button>
            </div>
            <form action='' method="dialog">
                <button onClick={onClose}>close</button>
            </form>
            
        </dialog>
    </>
}

export default MyModal;