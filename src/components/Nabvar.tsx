import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

type Props = {};

const Navbar = (props: Props) => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }

    return (
        <>
            <div className='container'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand m-2" to="/adminpanel">Management Panel</Link>
                        <span className="m-2">|</span> 
                        <Link className="nav-link active m-2" aria-current="page" to="/roleadd">Roles</Link>
                        <span className="m-2">|</span> 
                        <Link className="nav-link m-2" to="/userconfig">Users</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
