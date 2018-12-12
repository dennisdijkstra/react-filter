import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import s from './Login.css';

class Login extends Component {
    submit = (values, { setSubmitting }) => {
        if (values) {
            console.log(values);
            setSubmitting(false);
        }
    };

    render() {
        return (
            <div className={s.content}>
                <Formik initialValues={{ username: '', password: '' }} onSubmit={this.submit}>
                    {({ dirty, isSubmitting, submitSucceeded }) => (
                        <Form>
                            <div className={s.fields}>
                                <div className={s.field}>
                                    <Field type="text" name="username" placeholder="username" />
                                </div>
                                <div className={s.field}>
                                    <Field type="password" name="password" />
                                </div>
                            </div>
                            <button type="submit" disabled={!dirty || isSubmitting || submitSucceeded}>Login</button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default Login;
