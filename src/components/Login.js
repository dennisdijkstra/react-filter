import React from 'react';
import { Field, reduxForm } from 'redux-form';


const Login = () => (
    <div className="login content">
        <form className="login-form">
            <div className="login-form-fields">
                <div className="login-form-field">
                    <label className="login-form-label" htmlFor="username">Username:</label>
                    <Field
                        id="username"
                        name="username"
                        component="input"
                        type="text"
                    />
                </div>
                <div className="login-form-field">
                    <label className="login-form-label" htmlFor="password">Password:</label>
                    <Field
                        id="password"
                        name="password"
                        component="input"
                        type="password"
                    />
                </div>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
);

export default reduxForm({
    form: 'login',
})(Login);
