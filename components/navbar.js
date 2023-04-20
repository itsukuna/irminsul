import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HamburgerButton from './buttons/hamburgerButton';

const Navbar = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/artifacts', label: 'Artifacts' },
        { href: '/weapons', label: 'Weapons' },
    ];

    return (
        <nav className="bg-gray-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">Irminsul</div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {links.map(({ href, label }) => (
                                <Link key={href} href={href} className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${router.pathname === href ? 'bg-gray-700 text-white' : ''}`}>
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="block md:hidden">
                        <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map(({ href, label }) => (
                            <Link key={href} href={href} className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${router.pathname === href ? 'bg-gray-700 text-white' : ''}`}>

                                {label}

                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
