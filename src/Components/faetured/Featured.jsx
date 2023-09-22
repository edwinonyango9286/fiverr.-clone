import React from 'react'
import "./Featured.scss"


const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
        <div className="left">
            <h1>Find the right freelance service, right away</h1>
            <div className="search">
                <div className="searchInput">
                <img src="./images/search.png" alt=""/>
                <input type="text" placeholder='Search for any services...' />
                </div>
                <button>Search</button>
            </div>
            <div className='popular'>
                <span>Porpular:</span>
                <button>Web Design</button>
                <button>Wordpress</button>
                <button>Logo Design</button>
                <button>AI Services</button>
            </div>
        </div>
        <div className="right"></div>
        <img src="./images/man.png" alt="" />
        </div>
    </div>
  )
}

export default Featured
