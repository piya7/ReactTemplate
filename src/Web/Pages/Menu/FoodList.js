import React from 'react'
import constant from '../../../Constant.json' 

export default function FoodList(props) {
    console.log(props)
  return (
    <div>
    
        <div className='box'>
            <div className='img '><img src={constant.ROOT_URL + props.list.img} className='img-fluid ' style={{height:"250px",width:"415px",borderRadius:"40px"}}/></div>
                <div className='NameOfFood text-white text-center'>{props.list.price} </div>
                <div className='price text-white text-center'>{props.list.name}</div>
        </div>
        </div>
  )
}
