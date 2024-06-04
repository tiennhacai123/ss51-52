import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <NavLink to={'/home2'}>Home2</NavLink>
      <NavLink to={'/about2'}>About2</NavLink>
      <NavLink to={'/contact2'}>Contact2</NavLink>
      <Outlet></Outlet>
    </div>
  )
}
