import React from 'react'
import Constant from '../../../Constant.json'
import Heading from './Heading'

export default function Banner() {
  return (
    <div style={{ 
        height:"500px",
        backgroundImage: `url( ${Constant.ROOT_URL + '/banner.jpg'})`,       
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
      }}>
         <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                <Heading/>
                  
              </div>
             
          </div>
         </div>
      </div>
    )
  }
  
