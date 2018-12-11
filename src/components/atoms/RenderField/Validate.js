const validate = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'This field is required';
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }

    if (!values.password) {
        errors.password = 'This field is required';
    }
    return errors;
};

export default validate;
