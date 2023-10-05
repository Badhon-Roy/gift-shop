
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import swal from 'sweetalert';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                swal("Log Out!", "successful !", "success")
            })
            .catch(error => console.log(error))
    }
    const navLinks = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400 py-1 px-2 rounded" : ""
            }
        >
            Home
        </NavLink>
        </li>
         <li tabIndex={0} >
                <details className="relative group cursor-pointer">
                    <summary  >Shop by Category</summary>
                    <div className="absolute hidden p-3 rounded-lg shadow-lg font-bold space-y-2 bg-white text-black group-hover:block z-[1]">

                        <li className="block px-2">
                            <NavLink
                                to="/accessories"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-green-400 py-1 px-2 rounded" : ""
                                }
                            >
                                Accessories
                            </NavLink>
                        </li>
                        <li className="block px-2">
                            <NavLink
                                to="/cards"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-green-400 py-1 px-2 rounded" : ""
                                }
                            >
                                Cards
                            </NavLink>
                        </li>
                        <li className="block px-2">
                            <NavLink
                                to="/clothings"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-green-400 py-1 px-2 rounded" : ""
                                }
                            >
                                Clothings
                            </NavLink>
                        </li>
                        <li className="block px-2">
                            <NavLink
                                to="/handbags"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-green-400 py-1 px-2 rounded" : ""
                                }
                            >
                                Handbags
                            </NavLink>
                        </li>
                    </div>

                </details>
            </li>
             <li><NavLink
                to="/spacial_offer"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-green-400 py-1 px-2 rounded" : ""
                }
            >
                Spacial Offer
            </NavLink>
            </li>
        <li><NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400 py-1 px-2 rounded" : ""
            }
        >
            About
        </NavLink>
        </li>
        <li><NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400 py-1 px-2 rounded" : ""
            }
        >
            Contact
        </NavLink>
        </li>
    </>


    return (
        <div className="bg-base">
            <div className="navbar max-w-[1400px] mx-auto lg:px-16 md:px-8 px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img src="https://tinyurl.com/2ttd2mj7" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-8 px-1 font-bold">
                        {navLinks}
                    </ul>
                </div>




                <div className="navbar-end font-bold">
                    {
                        user && <div className="flex">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="cursor-pointer">
                                    <div className="avatar">
                                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            {
                                                user?.photoURL ? <img src={user.photoURL} /> :
                                                    <img className="bg-green-400" />
                                            }
                                        </div>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

                                    <li className="pl-3 text-xl">{user?.displayName}</li>
                                    <li className="pl-3 border-b-2 pb-3 border-black">{user?.email}</li>
                                    <li><button onClick={handleLogOut} className="font-bold my-1">Log Out</button></li>
                                </ul>
                            </div>


                        </div>
                    }
                    <ul className="flex gap-4">
                        {
                            !user && <li><NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-green-400 py-1 px-2 rounded" : ""
                                }
                            >
                                Login
                            </NavLink>
                            </li>

                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;