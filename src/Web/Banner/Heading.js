import React from 'react'
import Button from '../Comman/Button'


export default function Heading() {
  return (
    <div className='heading-main justify-content-md-center align-items-center vh-100' style= {{position:"absolute" ,top:"50%"}}> 
        <div className='heading-child'>
            <h4 className='text-white fontWeight: bold' >NEW RESTAURANT</h4>   
        </div>
        <h1 className='text-white fs-7 fw-light' style={{fontSize:"50px" ,fontWeight: "bold !Important"}} > Where every ingredient<br/> tells a story!</h1>
        <div className='heading-child'>
           <h4 className='text-white fw-light'>Image from <span className='text-success'>Freepik</span></h4>
        </div>
        <Button/>
    </div>
  )
}
