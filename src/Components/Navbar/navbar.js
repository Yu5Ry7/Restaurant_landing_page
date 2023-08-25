import React, { useState } from 'react';
import Logo from "../../Assets/Logo.svg";
import { BsCart } from "react-icons/bs"; // Corrected the import
import { HiOutlineMenu } from "react-icons/hi"; // Corrected the import
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"; 
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const menuOptions = [
        {
            Text: "Home",
            icon: <HomeIcon />
        },
        {
            Text: "About",
            icon: <InfoIcon />
        },
        {
            Text: "Testimonials",
            icon: <CommentRoundedIcon />
        },
        {
            Text: "Contact",
            icon: <PhoneRoundedIcon />
        },
        {
            Text: "Cart",
            icon: <ShoppingCartRoundedIcon />
        },
    ];

    const handleDrawerClose = () => {
        setOpenMenu(false);
    };

    return (
        <Box>
            <nav>
                <div className="nav-logo-container">
                    <img src={Logo} alt="Logo" />
                </div>

                <div className="navbar-links-container">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Testimonial</a>
                    <a href="#">Contact</a>
                    <a href="#">
                        <BsCart className="navbar-cart-icon" />
                    </a>
                    <button className="primary-button">Bookings Now</button>
                </div>
                <div className="navbar-menu-container">
                    <HiOutlineMenu onClick={() => setOpenMenu(true)} />
                </div>
            </nav>

            <Drawer anchor="right" open={openMenu} onClose={handleDrawerClose}>
                <Box sx={{ width: 250 }}>
                    {menuOptions.map((option) => (
                        <ListItem button key={option.Text}>
                            <ListItemIcon>
                                {option.icon}
                            </ListItemIcon>
                            <ListItemText primary={option.Text} />
                        </ListItem>
                    ))}
                </Box>
            </Drawer>
        </Box>
    );
};

export default Navbar;
