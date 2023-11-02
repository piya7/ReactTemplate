import React from 'react'
import Constant from '../../Constant.json'

export default function Img() {
  return (
    <>
    <img src={Constant.ROOT_URL+'/pizza.jpg'} className='img-fluid ' style={{height:'300px', width:'400px',borderRadius:'70px' }}/>
    </>
  )
}
