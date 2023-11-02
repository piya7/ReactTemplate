import React from 'react'
import Heading from './Heading'


export default function Banner() {
  // const path = {Constant.Roo}
  return (
    <section style={{ 
      backgroundImage: "url('https://assets.nicepagecdn.com/11a8ddce/4267640/images/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view.jpg ')",
      height:"100vh",
      backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
      
    }}>
       <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <Heading/>
                
            </div>
            <div className='col-md-6'></div>
        </div>
       </div>
    </section>
  )
}
