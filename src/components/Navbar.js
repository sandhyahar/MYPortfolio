import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../info/Info";
import om from '../img/om.png'; // Import your logo image
import Toggler from "./home/Toggler";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Style from './Navbar.module.scss';

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        logo: om, // Replace initials with logo
        type: 'logo',
        to: '/',
        active: 'home'
    },
    {
        name: 'Projects',
        to: '/portfolio',
        active: 'portfolio'
    }
]

export default function Navbar({ darkMode, handleClick }) {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1));
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} className={`${Style.navbar} ${navOpen ? Style.open : ''}`}
                display={{ xs: navOpen ? 'flex' : 'none', md: 'flex' }} justifyContent={'center'} alignItems={'center'}
                gap={{ xs: '1rem', md: '4rem' }}
                textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                        sx={{ borderImageSource: info.gradient }}>
                        <Link to={link.to} onClick={() => { setActive(link.active); setNavOpen(false); }} className={Style.link}>
                            {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
                            {link.type === 'logo' && <img src={link.logo} alt="Logo" className={Style.logo} />} {/* Render logo */}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </li>
            </Box>
            <Box component={'div'} className={Style.menuIcon} onClick={toggleNav}>
                {navOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </Box>
        </Box>
    );
}
