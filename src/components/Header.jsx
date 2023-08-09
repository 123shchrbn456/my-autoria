import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="Header">
            <h1>My Auto Ria</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cars-list">All Cars</Link>
                    </li>
                    <li>
                        <Link to="/add-car">Add Car</Link>
                    </li>
                    <li>
                        <Link to="/users-list">All Users</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
