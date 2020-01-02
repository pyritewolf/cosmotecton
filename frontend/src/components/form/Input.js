import React from 'react';
import styles from './Input.module.scss';


function Input({placeholder, type = 'text', value  = '', onChange}) {
  return (
    <div className={styles.root}>
      <input className={styles.input} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;