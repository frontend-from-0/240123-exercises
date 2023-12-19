import { NavLink } from 'react-router-dom'
import './styles.css'

export const Navbar = () => {

    return (
        <nav>
            <ul>
                <div><li className='nav-link'><NavLink to='/'>Go to Home Page</NavLink></li></div>
                <div className='nav-right'>
                    <li className='nav-link '><NavLink to='/recipes/new'>New Recipe Form</NavLink></li>
                    <li className='nav-link'><NavLink to='/signInPage'>Sign In</NavLink></li>
                    <li className='nav-link'><NavLink to='signUpPage'>Sign Up</NavLink></li>
                    <li className='nav-link '><NavLink to='/user/setting'>User Setting</NavLink></li>
                </div>

            </ul>
        </nav>
    )
}

