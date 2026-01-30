import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Navbar from './components/Section1/Navbar'
import Page1Content from './components/Section1/Page1Content'

const App = () => {


const users = [
  {
  img:'https://images.unsplash.com/photo-1762341117487-dbc411bcf574?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  intro:'',
  tag:'underserved'
  },

  {
   img:'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  intro:'',
  tag:'satisfied'
  },
  {
  img:'https://media.istockphoto.com/id/2213659186/photo/smiling-businessman-walking-outside-office-building-holding-laptop.jpg?s=2048x2048&w=is&k=20&c=OaJqQotb7kq2clh9aINTM_hLD-dcjT1H0jsQCbXmczU=',
  intro:'',
  tag:'underbanked'
  },
]
  return (
    <div>
      
    <Navbar/>
    <Page1Content/>
    
     <Section1/>
     <Section2/>
    </div>
  )
}

export default App