import React, { useState } from 'react'
import { Link, Switch, useRouteMatch } from 'react-router-dom';
import ProtectedRoute from './Helpers/ProtectedRoute';
import Campaign from './Pages/Campaign';
import Cases from './Pages/Cases';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Reports from './Pages/Reports';
import Settings from './Pages/Settings';
import logo from './Content/images/lion.png';
import { Collapse, NavbarToggler } from 'reactstrap';


function Dashboard() {
    let match = useRouteMatch();

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const handleLogout = () => {
        var confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout === true) {
            localStorage.clear();
            window.location.pathname = "/login";
        } 
    }

    return (
        <div className="container-fluid">
            <div className="row min-vh-100 flex-column flex-md-row">
                <aside className="col-12 col-md-3 col-xl-2 p-0 bg-dark ">
                    <nav className="navbar navbar-expand-md navbar-dark bd-dark flex-md-column flex-row align-items-center py-2 text-center sticky-top " id="sidebar">
                    <div className="text-center p-3">
                        <img src={logo} alt="profile" className="img-fluid rounded-circle my-4 p-1 d-none d-md-block shadow"/>
                        <a href="/#" className="navbar-brand mx-0 font-weight-bold  text-nowrap text-primary" >ABC Company</a>
                    </div>
                    {/* <button type="button" className="navbar-toggler border-0 order-1" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                    <ul className="navbar-nav flex-column w-100">
                            <li className="nav-item">
                                <Link className="nav-link" to={match.url}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`${match.url}/profile`}>Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`${match.url}/campaign`}>Campaign</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`${match.url}/cases`}>Cases</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`${match.url}/reports`}>Reports</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a href="/#" className="nav-link"> Settings</a> */}
                                <Link className="nav-link" to={`${match.url}/settings`}>Settings</Link>
                            </li>
                            <li className="nav-item">
                                <button type="button" onClick={handleLogout} className="btn btn-primary">Logout</button>
                            </li>
                        </ul>
                    </Collapse>  
                    </nav>   
                </aside>
                <main className="col px-0 flex-grow-1">
                    <div className="container py-3">
                    <Switch>

                        <ProtectedRoute exact path={match.path} comp={Home} />
                        <ProtectedRoute path={`${match.path}/profile`} comp={Profile} />
                        <ProtectedRoute path={`${match.path}/cases`} comp={Cases} />
                        <ProtectedRoute path={`${match.path}/campaign`} comp={Campaign} />
                        <ProtectedRoute path={`${match.path}/reports`} comp={Reports} />
                        <ProtectedRoute path={`${match.path}/settings`} comp={Settings} />
                        </Switch>
                    </div>
                </main>
            </div>
        </div>

    )
}

export default Dashboard;
