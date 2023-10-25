import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { BiSearch } from "react-icons/bi";
import { BsMinecartLoaded } from "react-icons/bs";


const Navbar = () => {

    const routes = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ]

    const navLinks = <div className="flex flex-col md:flex-row gap-8 font-semibold text-primaryText">
        {
            routes.map((route, indx) => <NavLink to={route.path} key={indx} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-lg" : "text-lg"
            }>{route.name}</NavLink>)
        }
    </div>

    return (
        <div>
            <div className="navbar h-20 my-2 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className=""><img className="w-3/4" src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex flex-col md:flex-row gap-1">
                    <div className="flex gap-5 text-2xl mx-2 text-primaryText">
                        <BsMinecartLoaded className="cursor-pointer"></BsMinecartLoaded>
                        <BiSearch className="cursor-pointer"></BiSearch>
                    </div>
                    <a className="btn btn-sm md:btn-md btn-outline text-primaryCol border-primaryCol text-lg font-semibold hover:border-primaryCol hover:bg-primaryCol hover:text-white">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;