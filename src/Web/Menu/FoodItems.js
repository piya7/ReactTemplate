import React from 'react'
import Image from './Image'
import Button from '../Comman/Button'


export default function FoodItems(props) {
    
  return (
    
    <div className='item'>
        <div className='img'><Image data={props.text.img}/></div>
        <div className='foodname'><h4 className='text-white text-center'>{props.text.name}</h4></div>
        <div className='Button pb-4 text-center'><Button/></div>
    </div>
  )
}
