import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import RenderField from './form/RenderField';
import validate from './form/Validate';

const Login = (props) => {
    const {
        handleSubmit,
        reset,
        pristine,
        submitting,
    } = props;

    return (
        <div className="login content">
            <form className="form login-form" onSubmit={handleSubmit}>
                <div className="login-form-fields">
                    <div className="form-field">
                        <Field
                            name="username"
                            component={RenderField}
                            type="text"
                            label="Username:"
                        />
                    </div>
                    <div className="form-field">
                        <Field
                            name="password"
                            component={RenderField}
                            type="password"
                            label="Password:"
                        />
                    </div>
                </div>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Login</button>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'login',
    validate,
})(Login);

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
};
