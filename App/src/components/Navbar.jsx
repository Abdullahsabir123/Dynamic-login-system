import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useData from '../hooks/useData';

export default function Navbar() {
    const { login, setLogin, loginUser } = useData(); // Destructuring loginUser from useData
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Handle dropdown toggle
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Facbook</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex me-5">
                                <div>
                                    <Link to={"/"}>
                                        <button className="btn btn-success me-5" type="submit">Sign In</button>
                                    </Link>
                                    <Link to={"signup"}>
                                        <button className="btn btn-primary me-5" type="submit">Sign Up</button>
                                    </Link>
                                </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
