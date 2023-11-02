import React from 'react'

export default function Text() {
  return (
    <div className='main text-white'>
      <div className='price'><h3>$100</h3></div>
      <div className='heading'>SPECIAL DELICIOUS Pizza</div>
      <div className='description'><h4 style={{fontFamily: "'Playpen Sans', cursive"}}>pizza, dish of Italian origin consisting of aflattened 
        disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients,
      baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot ... </h4></div>
      <div className='imgAddress text-white'><h4>image From <span className='text-success'>Freepik</span></h4></div>
    </div>
  )
}
