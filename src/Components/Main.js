import React from'react'
import Mainelements from './Mainelements';
import { dataRef } from './Sen_firebase/Firebase';
import { useEffect,useState } from 'react';
import Operation from './Operation';

/*
const Main=Mainelements.map(mainfunc=>{
    
    return(
        <div className='card'>
        <span className='card-span'>Rating: {mainfunc.ratings}</span>
        <span className='card-span'>Price: {mainfunc.price}</span>
        <span className='card-span'>Country: {mainfunc.country}</span>
    </div>
    )
})*/
const Main=()=>{
    const [allvalues,setAllvalues]=useState([])
    const [timevalues,setTimevalues]=useState([])

    useEffect(()=>{
        dataRef.ref().child("count").on('value',data=>{
            const getData=Object.values(data.val())
            setAllvalues(getData)
        })
    },[])
    useEffect(()=>{
        dataRef.ref().child("count").on('value',timedata=>{
            const getTime=Object.values(timedata.val())
            setTimevalues(getTime)
        })
    },[])

    console.log(allvalues)
    return(
     <div className='App'>
         <div className='card'>
            `<h1>Counts:</h1>
            {allvalues.map((valData,i)=><h1 key={`val-${i}`}>{valData}</h1>)}`
        
         </div>

    <div className='card'>
        <h1 className='power'>Power Consumption:</h1>
        {timevalues.map((timeData,i)=><h1 key={`time-${i}`}>{timeData} </h1>)}
        <h1>kWh</h1>
    </div>
    <Operation/>
       </div>
    )   
}
export default Main;
