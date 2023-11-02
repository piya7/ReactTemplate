import React from 'react'
import Text4 from './Text4'
import InputBox from './InputBox'
import Constant from '../../Constant.json'

export default function Main4() {
  return (
    <section style={{
        backgroundImage:`url( ${Constant.ROOT_URL + '/backgroundVeg.jpg'})`,
        height:"500px",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
    }}>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
                <Text4/>
                <InputBox/>
            </div>
        </div>
    </div>
    </section>
  )
}
