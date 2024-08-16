// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { runActionCreator } from './redux/gymData/action';
// import { profileData } from './redux/profileData/action';

function App() {
  // const [count, setCount] = useState(0)

  const reduxData=useSelector(state=>state)
  
  const dispatch=useDispatch()

  const runHandler=()=>{
    dispatch(runActionCreator())
  }
  

  return (
    <>
     <h1>psp</h1>
     {/* <h2>username:{reduxData.username}</h2> */}
     <h2>coloriesBurned:{reduxData.coloriesBurned}</h2>
     <h2>runningDistance:{reduxData.runningDistance}</h2>
     <h2>timeInSeconds:{reduxData.timeInSeconds}</h2>

     <button onClick={runHandler}>Run For Hour</button>
    </>
  )
}

export default App
