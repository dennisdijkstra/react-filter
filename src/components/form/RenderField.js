import React from 'react';

const renderField = ({ input, label, type, meta: { error } }) => (
    <div>
        <label className="form-label">{label}</label>
        <div>
            <input {...input} type={type} />
            {error
                && (<span className="error">{error}</span>)
            }
        </div>
    </div>
);

export default renderField;
