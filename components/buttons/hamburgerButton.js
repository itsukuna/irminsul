const HamburgerButton = ({ isOpen, onClick }) => {
    const handleClick = () => {
        onClick(!isOpen);
    };

    return (
        <button
            type="button"
            className="text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-700 focus:text-white px-2 py-1 rounded-md"
            onClick={handleClick}
        >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
};

export default HamburgerButton