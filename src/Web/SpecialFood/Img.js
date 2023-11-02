import React from 'react'
import Constant from '../../Constant.json'

export default function Img() {
  return (
    <>
    <img className='img-fluid'src={Constant.ROOT_URL + '/pakora.jpg'} style={{borderRadius: '70px' }}/>
    </>
  )
}
