import React from 'react'
import Text5 from './Text5'

export default function ContactUs() {

    const ContData=[{
        icon:<i className='fa-regular fa-envelope fa-2xl'></i>,
        Title: "Chart to us",
        Heading: "Our friendly team is here to help.",
        Address: "example@gmail.com"
    },
    {
        icon:<i className='fa-solid fa-location-dot fa-2xl'></i>,
        Title: "Office",
        Heading: "Come say hello at our office HQ.",
        Address: "121 rock street,mansa devi complex,panchkula."
    },
    {
        icon:<i className='fa-solid fa-phone fa-2xl'></i>,
        Title: "Phone",
        Heading: "Mon-Fri from 10 am to 5am",
        Address: "+03254125454364"
    }]
  return (
    <section className='bg-dark'>
          <div className='container'>
           <div className='row'>
  
        {ContData.map((data,index)=>
        <div key={index} className='col-lg-4'> <Text5 con={data}/></div>
        )}
        
        </div>
        </div>
    </section>
  )
}
