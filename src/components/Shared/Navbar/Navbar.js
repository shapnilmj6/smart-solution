import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <h1 class="ms-5" >Smart Solution</h1>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-5" href="/login">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-5" href="dashboard">Admin</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-5" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-5" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;