import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="btn btn-primary ms-4" >ISC</a>
    
    <div className='rightnav justify-right'>
    <Link class="btn btn-primary me-2" to='/about' >ABOUT</Link>
    <a class="btn btn-primary me-2" >FEATURE</a>
    <a class="btn btn-primary me-2" >MEMBERS</a>
    

    </div>
  </div>
</nav>
    </>
  )
}
