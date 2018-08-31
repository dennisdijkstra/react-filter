const validate = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'This field is required';
    }

    if (!values.password) {
        errors.password = 'This field is required';
    }
    return errors;
};

export default validate;
