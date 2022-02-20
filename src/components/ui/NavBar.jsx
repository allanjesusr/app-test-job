import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
           <Link 
                className="navbar-brand ms-2" 
                to="/"
            >
                Exercises
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/fibonacci"
                    >
                        Fibonacci App
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/multi"
                    >
                        Multiplos App
                    </NavLink>
                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/movie"
                    >
                        Movies App
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
