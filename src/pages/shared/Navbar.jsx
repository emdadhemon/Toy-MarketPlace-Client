import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogout = () => {
        logOut();
    }

    return (
        <div className='bg-gray-900'>
            <div className='navbar w-[85%] mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/alltoys">All Toys</Link></li>
                            <li><Link to="/addtoys">Add Toy</Link></li>
                            {
                                user ?
                                    <li><Link to="/mytoys">MyToys</Link></li>: ""
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/alltoys">All Toys</Link></li>
                        <li><Link to="/addtoys">Add Toy</Link></li>
                        {
                            user ?
                                <li><Link to='/mytoys'>MyToys</Link></li> : ""
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <Link onClick={handleLogout} className="btn">Logout</Link> : <Link to="/login" className="btn">LogIn</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;