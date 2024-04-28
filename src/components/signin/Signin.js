import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { loginContext } from '../../context/LoginContextProvider';
import { useNavigate } from 'react-router-dom';
import './Signin.css'; // Import CSS file for animations

function Signin() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { currentUserDetails, loginUser } = useContext(loginContext);

    async function onLogin(credObj) {
        loginUser(credObj);
    }

    useEffect(() => {
        if (currentUserDetails.userLoginStatus) {
            // Navigate to the 'Form' component when the user logs in
            navigate('/form');
        }
    }, [currentUserDetails.userLoginStatus, navigate]); // Include navigate in the dependency array

    return (
        <div className="signin-container">
            <div className="signin-form">
                <h2>Sign In</h2>
                {currentUserDetails.err.length !== 0 &&
                    <p className="error-message">{currentUserDetails.err}</p>
                }
                <form onSubmit={handleSubmit(onLogin)}>
                    {/* Username */}
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" {...register("username")} id="username" className="form-control" />
                    </div>
                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" {...register("password")} id="password" className="form-control" />
                    </div>
                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Signin;
