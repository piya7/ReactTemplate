import React from 'react'

export default function Text5(props) {
    console.log(props)
  return (
    <>
    <div className='main text-white text-center pt-5'>
      <div className='box mb-4'>
      <div className='icon align-item-center ' style={{width:' 66px',backgroundColor: 'green',height: '53px',padding: '17px', margin:'auto' ,borderRadius:'46px'}}>{props.con.icon}</div></div>
    <div className='Title'><h2>{props.con.Title}</h2></div>
    <div className='Description'><h4>{props.con.Heading}</h4></div>
    <div className='MailId'>{props.con.Address}</div>
    
    </div>
    </>
  )
}
