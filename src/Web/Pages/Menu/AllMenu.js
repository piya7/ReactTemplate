import React from 'react'
import FoodDumydata from '../../FoodDumydata.json';
import FoodList from './FoodList';
import Banner from './Banner';

export default function AllMenu() 
{
  
  return (
    <section className='bg-dark '>
      <Banner/>
    <div className='container'>
      <div className='row pt-4'>      
        {FoodDumydata.map((data,index) =>
       <div className='col-lg-4 pb-4' ><FoodList list={data} /></div>
     
    )}
       
      </div>
    </div>

    
   </section>
  )
}
