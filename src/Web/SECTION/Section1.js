import React from 'react'
import Constant from '../../Constant.json' 
import Cards from './Cards'

export default function Section1() {
    const cardData=[
        {
            img:'https://assets.nicepagecdn.com/11a8ddce/4267640/images/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view.jpg',
            text:'Food Sourcing'         
        },

        {
                img:'https://assets.nicepagecdn.com/11a8ddce/4267640/images/italian-spaghetti-with-tomato-sauce-pan.jpg',
                text:'Menu Development'         
        },

        {
                    img:'https://assets.nicepagecdn.com/11a8ddce/4267640/images/pexels-photo-3850972.jpeg',
                    text:'Restaurant'         
        }]
  return (
    <section className='bg-dark'>
    <div className='container'>
        <div className='row pt-4'>
    
           {cardData.map((data,index)=>
            <div key={index} className='col-lg-4'><Cards data={data} /></div>   )
            }
 
           
        </div>
    </div>
    </section>
  )
}
