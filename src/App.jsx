// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { runActionCreator } from './redux/gymData/action';
import { profileData } from './redux/profileData/action';
import { useEffect } from 'react';
import { productDetails } from './redux/products/action';

function App() {
  // const [count, setCount] = useState(0)

  const gymData=useSelector(state=>state.gym)

  const profileDetails=useSelector(state=>state.profile)

  const {loading,productData}=useSelector(state=>state.productData)
  
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(productDetails())
  },[])

  const runHandler=()=>{
    dispatch(runActionCreator())
  }
  
  const changeName=()=>{
    dispatch(profileData())
  }

  return (
    <>
     <h2>username:{profileDetails.username}</h2>
     <button onClick={changeName}>Change Name</button>
     <h2>coloriesBurned:{gymData.coloriesBurned}</h2>
     <h2>runningDistance:{gymData.runningDistance}</h2>
     <h2>timeInSeconds:{gymData.timeInSeconds}</h2>

     <button onClick={runHandler}>Run For Hour</button>

     <h2>Product Data</h2>
     {
      loading?<h3>please wait!!!!!</h3>:
      <>
      {
        productData.map(each=>{
          return(
            <>
            <h3>{each.title}</h3>
            <img src={each.image} width={100} height={100}/>
            </>
          )
        })
      }
      </>
     }
    </>
  )
}

export default App
