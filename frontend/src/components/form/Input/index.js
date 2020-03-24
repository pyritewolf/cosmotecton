import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';


function Input({placeholder, type = 'text', value  = '', onChange, error}) {
  return (
    <div className={styles.root}>
      <input className={classNames(styles.input, error && styles.invalid)} type={type} placeholder={placeholder} value={value} onChange={onChange} />
      <div className={styles.error}>{error}</div>
    </div>
  );
}

export default Input;