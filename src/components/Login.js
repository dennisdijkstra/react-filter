import React from 'react';
import PropTypes from 'prop-types';
import {
    Field,
    reduxForm,
    SubmissionError,
    reset,
} from 'redux-form';
import RenderField from './form/RenderField';

const submit = (values, dispatch) => {
    if (!values.username) {
        throw new SubmissionError({
            username: 'This field is required',
            _error: 'Login failed!',
        });
    } else if (!values.password) {
        throw new SubmissionError({
            password: 'This field is required',
            _error: 'Login failed!',
        });
    } else {
        console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        dispatch(reset('login'));
    }
};

const Login = (props) => {
    const {
        handleSubmit,
        submitting,
    } = props;

    return (
        <div className="login content">
            <form className="form login-form" onSubmit={handleSubmit(submit)}>
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
                <button type="submit" disabled={submitting}>Login</button>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'login',
})(Login);

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
};
