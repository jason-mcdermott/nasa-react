import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header className="navigation">
        <div >
            <NavLink to="/" activeClassName="is-active" exact={true}>
                <img className="home-link" src='../../../NASA-logo.png' />
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/pic-of-the-day" activeClassName="is-active">POTD</NavLink>
                </li>
                <li>
                    <NavLink to="/space-facts" activeClassName="is-active">SF</NavLink>
                </li>
                <li>
                    <NavLink to="/iss-position" activeClassName="is-active">ISS</NavLink>
                </li>
            </ul>
        </div>
    </header>
)

export default Header