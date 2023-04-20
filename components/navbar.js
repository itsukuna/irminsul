import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
    const router = useRouter();
    return (
        <nav className="bg-gray-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 text-sm">
                            Irminsul
                        </div>
                        <div className="block sm:hidden ml-2">
                            <button type="button" className="text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-700 focus:text-white px-2 py-1 rounded-md">
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden sm:block">
                            <div className="ml-4 flex items-baseline space-x-2">
                                <Link href="/" className={`text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-xs font-medium ${router.pathname === '/' ? 'bg-gray-700 text-white' : ''}`}>Home</Link>
                                <Link href="/artifacts" className={`text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-xs font-medium ${router.pathname === '/artifacts' ? 'bg-gray-700 text-white' : ''}`}>Artifacts</Link>
                                <Link href="/weapons" className={`text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-xs font-medium ${router.pathname === '/weapons' ? 'bg-gray-700 text-white' : ''}`}>Weapons</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
