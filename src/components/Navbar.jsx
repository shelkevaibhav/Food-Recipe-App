import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const handlesubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  }
  return (
    <>
      <div className="nav">
        <div className="left">
          <Link to='/' className='link'>
            <h2>Food Recipe App</h2>
          </Link>
        </div>
        <div className="search">
          <form onSubmit={handlesubmit}>
            <input
              onChange={(e) => setInput(e.target.value)}
              type='text'
            />
          </form>
        </div>
        <div className="right">
          <Link to={`/Categary/indian`} className='link'>
            <div>Indian</div>
          </Link>
          <Link to={`/Categary/american`} className='link' >
            <div>American</div>
          </Link>
          <Link to={`/Categary/british`} className='link' >
            <div>British</div>
          </Link>
          <Link to={`/Categary/thai`} className='link'>
            <div>Thai</div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar 