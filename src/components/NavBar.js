import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import propic from './images/ProPic.jpg';

export function NavBar2() {
    return (
        <>
            {/* <!-- Navbar --> */}
            <nav class="navbar navbar-light bg-light">
                {/* <!-- Container wrapper --> */}
                <div class="container">
                    {/* <!-- Navbar brand --> */}
                    <a class="navbar-brand me-2" href="https://mdbgo.com/">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                        height="16"
                        alt="MDB Logo"
                        loading="lazy"
                        style="margin-top: -1px;"
                    />
                    </a>

                    {/* <!-- Toggle button --> */}
                    <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarButtonsExample"
                    aria-controls="navbarButtonsExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <i class="fas fa-bars"></i>
                    </button>

                    {/* <!-- Collapsible wrapper --> */}
                    <div class="collapse navbar-collapse" id="navbarButtonsExample">
                        {/* <!-- Left links --> */}
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Dashboard</a>
                            </li>
                        </ul>
                        {/* <!-- Left links --> */}

                        <div class="d-flex align-items-center">
                            <button type="button" class="btn btn-link px-3 me-2">
                            Login
                            </button>
                            <button type="button" class="btn btn-primary me-3">
                            Sign up for free
                            </button>
                            <a
                                class="btn btn-dark px-3"
                                href="https://github.com/mdbootstrap/mdb-ui-kit"
                                role="button">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    {/* <!-- Collapsible wrapper --> */}
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}
        </>
    );
}

export function NavBar() {
    return (
        <>
            {/* <!-- Navbar --> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            {/* <!-- Container wrapper --> */}
            <div class="container-fluid">
                {/* <!-- Toggle button --> */}
                <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i class="fas fa-bars"></i>
                </button>

                {/* <!-- Collapsible wrapper --> */}
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <!-- Navbar brand --> */}
                    <a class="navbar-brand mt-2 mt-lg-0" href="#">
                        <img
                        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                        height="15"
                        alt="MDB Logo"
                        loading="lazy"
                        />
                    </a>
                    {/* <!-- Left links --> */}
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link" href="#">Dashboard</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Team</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                        </li>
                    </ul>
                    {/* <!-- Left links --> */}
                </div>
                {/* <!-- Collapsible wrapper --> */}

                {/* <!-- Right elements --> */}
                <div class="d-flex align-items-center">
                {/* <!-- Icon --> */}
                <a class="text-reset me-3" href="#">
                    <i class="fas fa-shopping-cart"></i>
                </a>




                {/* <!-- Notifications --> */}
                <div class="dropdown">
                    <a
                    class="text-reset me-3 dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <i class="fas fa-bell"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">1</span>
                    </a>
                    <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                    >
                    <li>
                        <a class="dropdown-item" href="#">Some news</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">Another news</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                    </ul>
                </div>

                {/* <!-- Avatar --> */}
                <div class="dropdown">
                    <a
                    class="dropdown-toggle d-flex align-items-center hidden-arrow"
                    href="#"
                    role="button"
                    id="navbarDropdownMenuAvatar"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                        <img
                            src={propic}
                            class="rounded-circle"
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                        />
                    </a>
                    <ul
                        class="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuAvatar"
                    >
                        <li><a class="dropdown-item" href="#">My profile</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </div>
                
                <a
                class="btn btn-dark "
                href="https://github.com/JackyChong971231"
                role="button">
                    <i class="fa fa-github"></i>
                </a>
                </div>
                {/* <!-- Right elements --> */}
            </div>
            {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}
        </>
    )
}