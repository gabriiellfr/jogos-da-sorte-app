import { Link } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <footer className="bg-gray-900 text-white fixed bottom-0 left-0 right-0 z-10 px-4 md:px-6 h-16 flex items-center justify-between">
            <p className="text-sm">© 2024 Acme Inc</p>
            <nav className="hidden md:flex items-center gap-6">
                <Link className="hover:underline" href="#" to="/terms">
                    Terms
                </Link>
                <Link className="hover:underline" href="#" to="/privacy">
                    Privacy
                </Link>
                <Link className="hover:underline" href="#" to="/support">
                    Support
                </Link>
            </nav>
        </footer>
    );
};

export default FooterComponent;
