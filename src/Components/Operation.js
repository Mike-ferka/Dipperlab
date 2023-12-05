import React,{useState} from 'react'
import { dataRef } from './Sen_firebase/Firebase'

function Operation(){

    const[Control,setControl]=useState(true)
    let State=Control?"on":"off"
    function handleState(){
        dataRef.ref().child("Control").set(State)
        setControl(preState=>!preState)
       
    }
   
    return(
        <div>
            <button onClick={handleState}>{State}</button>
        </div>
    )


}

export default Operation