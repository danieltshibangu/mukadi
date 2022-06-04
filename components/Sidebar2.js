export default function Sidebar2() {
    return (
        <div>
            <div className="sidebar close">
                <div className="logo-details">
                    <img src='/mukadi-logo-black.svg' alt='' />
                    <span className="logo-name">Mukadi</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="">
                            <i className='bx bx-grid-alt'></i>
                            <span className="link-name">Dashboard</span>
                        </a>
                        <ul className="submenu blank">
                            <li><a className='link_name' href="">Category</a></li>
                        </ul>
                    </li>

                    <li>
                        <div className="icon-links">
                            <a href="">
                                <i className='bx bx-collection'></i>
                                <span className="link-name">Category</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="submenu">
                            <li><a className='link_name' href="">Category</a></li>
                            <li><a href="">HTML and CSS</a></li>
                            <li><a href="">Javascript</a></li>
                            <li><a href="">PHP and MySQL</a></li>
                        </ul>
                    </li>

                    <li>
                        <div className="icon-links">
                            <a href="">
                                <i className='bx bx-book-alt'></i>
                                <span className="link-name">Posts</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="submenu">
                            <li><a className='link_name' href="">Posts</a></li>
                            <li><a href="">HTML and CSS</a></li>
                            <li><a href="">Javascript</a></li>
                            <li><a href="">PHP and MySQL</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="">
                            <i className='bx bx-pie-chart-alt-2'></i>
                            <span className="link-name">Analytics</span>
                        </a>
                        <ul className="submenu blank">
                            <li><a className='link_name' href="">Analytics</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="">
                            <i className='bx bx-line-chart'></i>
                            <span className="link-name">Chart</span>
                        </a>
                        <ul className="submenu blank">
                            <li><a className='link_name' href="">Chart</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="icon-links">
                            <a href="">
                                <i className='bx bx-plug'></i>
                                <span className="link-name">Plugins</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="submenu">
                            <li><a className='link_name' href="">Plugins</a></li>
                            <li><a href="">UI Face</a></li>
                            <li><a href="">Pigments</a></li>
                            <li><a href="">Box Icons</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="">
                            <i className='bx bx-compass'></i>
                            <span className="link-name">Explore</span>
                        </a>
                        <ul className="submenu blank">
                            <li><a className='link_name' href="">Explore</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="">
                            <i className='bx bx-history'></i>
                            <span className="link-name">History</span>
                        </a>
                        <ul className="submenu blank">
                            <li><a className='link_name' href="">History</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="">
                            <i className='bx bx-cog'></i>
                            <span className="link-name">Settings</span>
                        </a>
                        <ul className="submenu blank">
                            <li><a className='link_name' href="">Settings</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

                <section className="other-sidebar">
                    <div className="adjacent-sidebar">
                        <i className="bx bx-menu"></i>
                    </div>
                </section>
        </div>
    );
}

