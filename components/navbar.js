import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
    const router = useRouter();
    return (
        <nav className="bg-gray-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            Irminsul
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/" className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/' ? 'bg-gray-700 text-white' : ''}`}>Home</Link>
                                <Link href="/artifacts" className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/artifacts' ? 'bg-gray-700 text-white' : ''}`}>Artifacts</Link>
                                <Link href="/weapons" className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/weapons' ? 'bg-gray-700 text-white' : ''}`}>Weapons</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
