import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, SubmissionError, reset } from 'redux-form';
import RenderField from '../../components/atoms/RenderField';
import validate from '../../components/atoms/RenderField/Validate';
import s from './Login.css';

class Login extends Component {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired,
    };

    submit = (values, dispatch, props) => new Promise((resolve, reject) => {
        const errors = validate(values, props);

        if (Object.keys(errors).length !== 0) {
            reject(new SubmissionError(errors));
        } else {
            dispatch(reset('login'));
            resolve();
        }
    });

    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <div className={s.login}>
                <form
                    className={s['login-form']}
                    onSubmit={handleSubmit(this.submit)}
                >
                    <div className={s['login-form-fields']}>
                        <div className={s['login-form-field']}>
                            <Field
                                name="username"
                                component={RenderField}
                                type="text"
                                label="Username:"
                            />
                        </div>
                        <div className={s['login-form-field']}>
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
    }
}

export default reduxForm({
    form: 'login',
})(Login);
