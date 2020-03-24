import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';


function Button({children, type = 'button', appearance = "default", disabled, onClick}) {
  return <button
    disabled={disabled}
    type={type}
    className={classNames(styles.root, styles[appearance])}
    onClick={onClick}>
      {children}
  </button>;
}

export default Button;