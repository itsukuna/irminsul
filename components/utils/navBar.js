import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        { href: '/', label: 'Home' },
        // Add more links as needed
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <AppBar position="static" sx={{ height: '64px' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Irminsul
                </Typography>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleMenu}
                    sx={{ display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <div className="hidden sm:block">
                    <div className="ml-4 flex items-center space-x-2">
                        {links.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={handleLinkClick}
                                passHref
                                underline="none"
                            >
                                <Button
                                    color="inherit"
                                    sx={{
                                        textTransform: 'capitalize',
                                        fontWeight: router.pathname === href ? 'bold' : 'normal',
                                    }}
                                >
                                    {label}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
            </Toolbar>
            {isOpen && (
                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={handleLinkClick}
                                passHref
                                underline="none"
                            >
                                <Button
                                    color="inherit"
                                    fullWidth
                                    sx={{
                                        textTransform: 'capitalize',
                                        fontWeight: router.pathname === href ? 'bold' : 'normal',
                                    }}
                                >
                                    {label}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </AppBar>
    );
};

export default Navbar;
