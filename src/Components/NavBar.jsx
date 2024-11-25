import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/dashboard/gym logo.png';
import loginImg from '../assets/home/girl.jpg';
import { useEffect, useState } from 'react';
import { createTheme, Switch, ThemeProvider } from '@mui/material';
import { IoMdMenu } from "react-icons/io";

const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'Instructor', route: '/instructor' },
    { name: 'Classes', route: '/classes' },
]

const theme = createTheme({
    palette: {
        primary: {
            main: "#ff0000",
        },
        secondary: {
            main: "#00ff00",
        },
    }
});

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [navBg, setNavBg] = useState('bg-[#15151580]');
    const user = true;


    const toggleMobileMenu = () => {
        setIsMobileOpen(!isMobileOpen);
    }

    useEffect(() => {
        const darkClass = 'dark';
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add(darkClass)
        } else {
            root.classList.remove(darkClass);
        }
    }, [isDarkMode]);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            setScrollPosition(currentPosition);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsHome(location.pathname === '/');
        setIsLogin(location.pathname === '/login');
        setIsFixed(location.pathname === 'register' || location.pathname === 'login');
    }, [location]);

    useEffect(() => {
        if (scrollPosition > 100) {
            if (isHome) {
                setNavBg('bg-white backdrop-filter backdrop-blur-xl dark:text-white text-black');
            }
            else {
                setNavBg('bg-white dark:bg-black dark:text-white text-black')
            }
        } else {
            setNavBg(`${isHome || location.pathname === '/' ? 'bg-transparent' : 'bg-white dark:bg-black'} dark:text-white text-white`);
        }
    }, [scrollPosition, isHome, location]);

    // const handleLogout = () => {
    //     console.log('logout');
    // };
    return (
        <nav className=''>
            <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
                <div className='flex justify-between items-center'>
                    {/* logo */}
                    <div onClick={() => navigate('/')} className='flex-shrink-0 cursor-pointer pl-7 md:p-0 flex'>
                        <h1 className="text-2xl inline-flex items-center font-bold ">CheguRafiGym<img className='w-24 h-24 -ml-5' src={logo} alt="" />
                        </h1>
                        {/* <h1 className="text-2xl inline-flex items-center font-bold ">GymGenesis<img className='w-24 h-24 -ml-5' src={logo} alt="" />
                        </h1> */}
                    </div>

                    {/* mobile menu icon */}
                    <div className='md:hidden flex item-center'>
                        <button type='button' onClick={toggleMobileMenu} className='hover:text-white focus:outline-none font-extrabold mr-3 text-3xl'>
                            <IoMdMenu className='h-6 w-6 hover:text-primary font-extrabold' />
                        </button>
                    </div>

                    {/* Navigational Link */}
                    <div className='hidden md:block text-black dark:text-white'>
                        <div className='flex'>
                            <ul className='ml-10 flex items-center space-x-4 pr-4'>
                                {
                                    navLinks.map((link, idx) => (
                                        <li key={idx} >
                                            <NavLink to={link.route} className={({ isActive }) => `font-bold ${isActive ? 'underline text-primary ' : ` ${navBg.includes('bg-transparent') ? 'text-black' : 'dark:text-white'}`} hover:text-teal-600 duration-300 `}>
                                                {link.name}
                                            </NavLink>
                                        </li>
                                    ))
                                }

                                {/* base on users */}
                                {
                                    user ? null : isLogin ? <li><NavLink to="/login" className={({ isActive }) => `font-bold ${isActive ? 'underline text-primary ' : ` ${navBg.includes('bg-transparent') ? 'text-white' : 'text-black dark:text-white'}`} hover:text-teal-600 duration-300 `}>Register</NavLink></li> :
                                        <li><NavLink to="/login" className={({ isActive }) => `font-bold ${isActive ? 'underline text-primary ' : ` ${navBg.includes('bg-transparent') ? 'text-black' : 'text-white dark:text-white'}`} hover:text-teal-600 duration-300 `}>Login</NavLink></li>
                                }
                                {
                                    user && <li>
                                        <NavLink to="/dashboard" className={({ isActive }) => `font-bold ${isActive ? 'underline text-primary ' : ` ${navBg.includes('bg-transparent') ? 'text-black' : 'text-white dark:text-white'}`} hover:text-teal-600 duration-300 `}>Dashboard</NavLink>
                                    </li>
                                }
                                {
                                    user && <li>
                                        <img src={loginImg} className='h-[40px] w-[40px] rounded-full' alt="" />
                                    </li>
                                }
                                {
                                    user && (
                                        <li>
                                            <NavLink
                                                className="font-bold px-3 py-2 bg-secondary text-white rounded-xl"
                                            >
                                                LogOut
                                            </NavLink>
                                        </li>
                                    )
                                }
                                <li>
                                    <ThemeProvider theme={theme}>
                                        <div className='flex flex-col justify-center items-center'>
                                            <Switch onChange={() => setIsDarkMode(!isDarkMode)}></Switch>
                                            <h1 className='text-[8px]'>Light/Dark</h1>
                                        </div>
                                    </ThemeProvider>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;