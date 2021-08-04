import React, { useState } from 'react';
import useToken from '../Helpers/useToken';
import './Login.css';
import logo from '../Content/images/lion.png';

function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setToken } =  useToken();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        
        if(username === "" || password === "") {
            alert("username/password cannot be blank ");
        } else if (username.toLowerCase() === "admin" || password === "12345") {
            const token = {
                username,
                password,
                isAuth: true
            } 

            setToken(token);
            window.location.pathname = "/dashboard";
        } else {
            alert("Invalid username/password");
            return;
        }

        
    };

    return (
        <div className="login-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                    <div className="bg-white shadow rounded">
                            <div className="row">
                                <div className="col-md-7 pe-0">
                                    <div className="form-left h-100 py-5 px-5">
                                        <form onSubmit={handleSubmit} className="row g-4">
                                                <div className="col-12">
                                                    <label>Username<span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <div className="input-group-text"><i className="bi bi-person-fill"></i></div>
                                                        <input type="text" onChange={(e:any) => setUserName(e.target.value)} className="form-control" placeholder="Enter Username" />
                                                    </div>
                                                </div>
        
                                                <div className="col-12">
                                                    <label>Password<span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <div className="input-group-text"><i className="bi bi-lock-fill"></i></div>
                                                        <input type="password" onChange={(e:any) => setPassword(e.target.value)} className="form-control" placeholder="Enter Password" />
                                                    </div>
                                                </div>
        
                                                <div className="col-12">
                                                    <button type="submit" className="btn btn-primary px-4 float-end mt-4">login</button>
                                                </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-5 ps-0 d-none d-md-block">
                                    <div className="form-right h-100 bg-primary text-white text-center pt-5">
                                        <div className="text-center">
                                            <img src={logo} className="rounded w-25 h-25" alt="..." />
                                        </div>
                                        <h2 className="fs-1">ABC Company CRM</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <p className="text-end text-secondary mt-3">By Jhon Agapito</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
