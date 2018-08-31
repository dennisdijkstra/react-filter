import React from 'react';

const RenderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning },
}) => (
    <div>
        <label className="form-label">{label}</label>
        <div>
            <input {...input} type={type} />
            {touched
                && ((error && <span className="error">{error}</span>)
                    || (warning && <span className="error">{warning}</span>))}
        </div>
    </div>
);

export default RenderField;
