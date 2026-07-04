import { useState } from "react"
import './Content.css';

function Content({myprop, children, onClick}){

  const [mystate, setMystate]=useState(0)



  return (<>
    <div className="contentDiv" id="content">
      <button onClick={onClick} >click here</button>
      <h2>{children}</h2>
      <h1>{myprop}</h1>
    </div>
  </>)

    /*
       props.children is a special prop that is used to pass the content between
       the opening and closing tags of a component. 
       */
}

export default Content
