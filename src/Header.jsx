import React, { useState, useEffect } from 'react'
import './index.css'
import { Link } from 'react-router-dom';
import { themeChange } from 'theme-change'

const Header = () => {

    useEffect(() => {
        themeChange(false)
      }, [])

  return (
    <div className="navbar bg-primary">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-primary btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-200 rounded-box w-52">
                <li><Link to='/' className='link text-cyan-950 link-hover'>Home</Link></li>
                <li><Link to='/stats' className='link text-cyan-950  link-hover'>Stats</Link></li>
                <li><Link to='/about' className='link text-cyan-950  link-hover'>About</Link></li>
                <li><Link to='/nightwave' className='link text-cyan-950  link-hover'>Nightwave</Link></li>
                </ul>
            </div>
            </div>
            <div className="navbar-center">
            <Link to='/' className="btn btn-primary text-xl rounded-box">Warframe Tracker</Link>
            </div>
            <div className="navbar-end">
            <button className="btn btn-primary btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
        </div>
        <label className="flex cursor-pointer gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                <input type="checkbox" data-toggle-theme="pastel,night" data-act-class="ACTIVECLASS" className="toggle theme-controller"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
        </label>
    </div>
  )
}

export default Header
