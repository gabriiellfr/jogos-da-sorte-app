import { Link } from 'react-router-dom';

import { Button } from '../ui/button';

const HeaderComponent = () => {
    return (
        <header className="bg-gray-900 text-white fixed top-0 left-0 right-0 z-10 px-4 md:px-6 h-16 flex items-center justify-between">
            <Link className="flex items-center gap-2" href="#" to="/">
                <MountainIcon className="h-6 w-6" />
                <span className="text-lg font-semibold">Acme Inc</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
                <Link className="hover:underline" href="#" to="/">
                    Home
                </Link>
                <Link className="hover:underline" href="#" to="/features">
                    Features
                </Link>
                <Link className="hover:underline" href="#" to="/pricing">
                    Pricing
                </Link>
                <Link className="hover:underline" href="#" to="/contact">
                    Contact
                </Link>
            </nav>
            <Button className="md:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation</span>
            </Button>
        </header>
    );
};

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}

export default HeaderComponent;
