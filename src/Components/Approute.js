import React from 'react'
import { Router, Routes } from 'react-router-dom'

const Approute = () => {
    const {proitem}=data;
  return ( 
    <div>
        <Router>
        <Routes proitem={proitem}/>
        </Router>
    </div>
  )
}

export default Approute