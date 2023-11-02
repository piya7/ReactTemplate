import React from 'react'
import Button from '../Comman/Button'

export default function InputBox() {
    
  return (
    <div className='Input'>
    <div className='TextBox' style={{display: 'flex'}}>
        <input type="text" className='form-control' style={{borderRadius:'25px'}}/>
        &nbsp;&nbsp;&nbsp;
        <Button/>
    </div>
    </div>
  )
}
