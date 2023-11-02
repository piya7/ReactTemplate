import React from 'react'
import Constant from '../../Constant.json'
import FoodItems from './FoodItems'
import Title from './Title'

export default function Menu() {
    const data=[
        {
        img:`${Constant.ROOT_URL + '/nonsld.jpg' }`,
        name: 'FRUIT SALAD'
        },
        {
        img:`${Constant.ROOT_URL + '/buffe.jpg' }`,
        name: 'BUFFE'
        },
        {
        img:`${Constant.ROOT_URL + '/Dry.jpg' }`,
        name: 'DRY FRUIT'
    },
    {
        img:`${Constant.ROOT_URL + '/salad.jpg' }`,
        name: 'SALAD'
    }
    
    
]
  return (
    <section className='bg-dark'>
        <div className='container'>
            <div className='row pt-4'><Title/></div>
            <div className='row pt-4'>
                {data.map((data, index)=>
                <div key={index} className='col-lg-6' ><FoodItems text={data}/></div>
                )}
          </div>
          </div>
    </section>
  )
}
