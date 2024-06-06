import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Navbar = (props: Props) => {
    return (
        <>
            <div className='container'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand m-2" to="/adminpanel">Management Panel</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/roleadd">Roles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/userconfig">Users</Link>
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
