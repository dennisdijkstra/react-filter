import React from 'react';
import s from './Spinner.css';

const Spinner = () => (
    <div className={s.spinner}>
        <div className={s.bounce1} />
        <div className={s.bounce2} />
        <div className={s.bounce3} />
    </div>
);

export default Spinner;
