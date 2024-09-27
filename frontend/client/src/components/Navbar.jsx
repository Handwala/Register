import { Link, NavLink } from "react-router-dom"
import { useSelector } from "react-redux";

const Navbar = () => {
    const {isAuthenticated } = useSelector(state => state.user);
    const authLinks =(
        <>
        <li>
            <NavLink className='nav-link' to='/dashboard'>
                Dashboard
            </NavLink>
        </li>
        <li>
            <li className='nav-link' to='/dashboard'>
                <a href="#!">logout</a>
               
            </li>
        </li>
        </>
    );
    const guestLinks =(
        <>
        <li>
            <NavLink className='nav-link' to='/LoginPage'>
                Login
            </NavLink>
        </li>

        <li>
            <NavLink className='nav-link' to='/RegisterPage'>
               Register 
            </NavLink>
        </li>
        </>
    )

  return (
    <div >
     <Link className="navbar" to='/'>
       Auth site 
     </Link>
     <ul>
        <li>
            <NavLink className='nav-link' to='/'>
                home
            </NavLink>
        </li>
       
        {isAuthenticated ? authLinks : guestLinks } 
     </ul>
     
    </div>
  )
}

export default Navbar

