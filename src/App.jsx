import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Content from './component/Content'
import RefsAndPortals from './component/RefsAndPortals'
import { Context } from './store/ContextAPI.jsx'
import MyNewHook from './component/UseFormStatusHook/MyNewHook.jsx'
import DerivedUsers from './component/DerivedStates/DerivedUsers.jsx'
import Parent from './component/LiftingStateUp/Parent.jsx'
import UpdatingStates from './component/UpdatingObjects/UpdatingStates.jsx'
import FormHandling from './component/UseActionState_Hook/FormHandling.jsx'





function App() {

  const [selectedState, setSelectedState] = useState('')
  function handleClick() {
    console.log("Hi, I am a button click event handler ")
  }
  console.log('This is son of Narayan')

  function handleSelect(componentName) {
    setSelectedState(componentName)
    console.log("Hi, I am a button click event handler " + componentName)
  }


  return (
    <>
      <Context.Provider value={{items: []}}>
        <div>
          <h1>I am React</h1>
        </div>
        <div>{selectedState ? (<p>current state selected is {selectedState}</p>) : <></>}</div>

        <RefsAndPortals />
        <Content myprop="Ram Krishna" onClick={() => handleSelect('button 1')}>button 1</Content>
        <Content onClick={() => handleSelect('button 2')}>button 2</Content>
        <p>Jai Shri Ram Jai ram jai jai ram</p>

        <MyNewHook/>
        <DerivedUsers/>

        <Parent/>

        <UpdatingStates/>

        <FormHandling/>
      </Context.Provider >
    </>

    /*
      if we use handleClick without parantheses then it will be treeated as a value
      of when I will click on the button then it will execute.

      and handleClick() will execute immediately when the component will rendered().
    */
  )
}

export default App
