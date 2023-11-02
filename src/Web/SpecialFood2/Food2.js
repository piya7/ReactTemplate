import React from 'react'
import Img from './Img'
import Text from './Text'

export default function Food2() {
  return (
    <section className='bg-dark'>
    <div className='container'>
        <div className='row pt-5'>
        <div className='col-lg-6'><Img/></div>
        <div className='col-lg-6'><Text/></div>
        </div>
    </div>
    </section>
  )
}
