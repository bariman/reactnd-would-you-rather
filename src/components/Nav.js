import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav() {
    let activeClassName = "active"
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/question/new' className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                    >
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaders' className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                    >
                        Leaderboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/logout' className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                    >
                        Logout
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
