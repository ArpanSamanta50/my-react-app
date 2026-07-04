import { useRef, useState } from "react"
import './RefsAndPortals.css'
import MyModal from "./MyModal"

function RefsAndPortals()
{

    const playerName=useRef()
    const [myPlayer, setMyPlayer]=useState()
    const [modal,setModal]=useState(false)

    function handleChange(){
        let myplayerName=playerName.current.value
        console.log(myplayerName)
        setMyPlayer(myplayerName)
    }

    function handleModal(){
        setModal(true)
    }
    function onCloseForm()
    {
        console.log(playerName.current)
        setModal(false)
    }

    return <div id='refsAndPortal'>
        <p className="my-player">{myPlayer ??''}</p>
        <input id="player-name" type="text" ref={playerName} onChange={handleChange}/>
        {modal?<div><MyModal onClose={onCloseForm}/></div>:''}
        {!modal && <button onClick={handleModal}>open modal</button>}
    </div>
}


export default RefsAndPortals