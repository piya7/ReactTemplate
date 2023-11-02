import React from 'react'
import Constant from '../../Constant.json'
import Img2 from './Img2'

export default function Section2() {
        
     const path=[{
        img:`${Constant.ROOT_URL + '/bread.jpg' }`
     },
     {
        img:`${Constant.ROOT_URL + '/pancake.jpg' }`
     },
     {
        img:`${Constant.ROOT_URL + '/fruit.jpg' }`,

     }]

  return (
    <section className='bg-dark'>
    <div className='container'>
        <div className='row pt-4'>
            {path.map((data,index)=>
              <div key={index}className='col-lg-4'><Img2 source={data}/> </div>
            )}
            
            
        </div>
    </div>
    </section>
  )
}
