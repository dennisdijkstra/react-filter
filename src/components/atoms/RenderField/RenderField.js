import React from 'react';
import s from './Form.css';

const renderField = ({ input, label, type, meta: { error } }) => (
    <div>
        <label htmlFor={type} className={s['form-label']}>{label}
            <div>
                <input {...input} type={type} id={type} />
                {error
                    && (<span className={s.error}>{error}</span>)
                }
            </div>
        </label>
    </div>
);

export default renderField;
