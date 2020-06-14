import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import s from './Login.css';

class Login extends Component {
    submit = (values, { setSubmitting, setStatus }) => {
        if (values) {
            console.log(values);
            setSubmitting(false);
            setStatus({ submitSucceeded: true });
        }
    };

    render() {
        return (
            <div className={s.content}>
                <Formik initialValues={{ email: '', password: '' }} onSubmit={this.submit}>
                    {({ dirty, isSubmitting }) => (
                        <Form>
                            <div className={s.fields}>
                                <div className={s.field}>
                                    <Field type="text" name="email" placeholder="Email" />
                                </div>
                                <div className={s.field}>
                                    <Field type="password" name="password" placeholder="Password" />
                                </div>
                            </div>
                            <button type="submit" disabled={!dirty || isSubmitting}>Login</button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default Login;
