import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Nasa - React</h1>
       
        <ul>
            <li>
                <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/potd" activeClassName="is-active">POTD</NavLink>
            </li>
            <li>
                <NavLink to="/sf" activeClassName="is-active">SF</NavLink>
            </li>
            <li>
                <NavLink to="/iss" activeClassName="is-active">ISS</NavLink>
            </li>
        </ul>
    </header>
)

export default Header