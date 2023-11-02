import React from 'react'

export default function Img2(props) {
  console.log(props)
  return (
    <>
    <img src={props.source.img} className='img-fluid' style={{borderRadius:'70px'}}/></>
  )
}
