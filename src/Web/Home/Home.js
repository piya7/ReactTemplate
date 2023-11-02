import React from 'react'
import Banner from '../Banner/Banner'
import Section1 from '../SECTION/Section1'
import Food from '../SpecialFood/Food'
import Section2 from '../Section2/Section2'
import Food2 from '../SpecialFood2/Food2'
import Menu from '../Menu/Menu'
import Main3 from '../Section3/Main3'
import Main4 from '../Section4/Main4'
import ContactUs from '../Contact/ContactUs'

export default function Home() {
  return (
   <div>
    <Banner/>
    <Section1/>
    <Food/>
    <Section2/>
    <Food2/>
    <Menu/>
    <Main3/>
    <Main4/>
    <ContactUs/>
   </div>
  )
}
