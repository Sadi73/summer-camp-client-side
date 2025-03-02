import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error));
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/classes">Classes</Link></li>
                        <li><Link to="/instructors">Instructors</Link></li>
                        {
                            user && <div>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link to="userprofile">Profile</Link></li>
                            </div>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Summer <br /> Kids Camp</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/classes">Classes</Link></li>
                    <li><Link to="/instructors">Instructors</Link></li>
                    {
                        user && <div className="flex">
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="userprofile">Profile</Link></li>
                        </div>
                    }
                </ul>
            </div>

            {
                user ? <div className="navbar-end">
                    <Link to="/login" className="btn" onClick={handleLogOut}>Log Out</Link>
                </div>
                    : <div className="navbar-end">
                        <Link to="/login" className="btn">Login</Link>
                    </div>
            }
        </div>
    );
};

export default NavBar;