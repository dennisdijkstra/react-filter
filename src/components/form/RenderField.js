import React from 'react';

const renderField = ({ input, label, type, meta: { error } }) => (
    <div>
        <label htmlFor={type} className="form-label">{label}
            <div>
                <input {...input} type={type} id={type} />
                {error
                    && (<span className="error">{error}</span>)
                }
            </div>
        </label>
    </div>
);

export default renderField;
