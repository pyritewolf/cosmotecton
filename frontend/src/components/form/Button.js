import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';


function Button({children, type = 'button', appearance = "default", onClick}) {
  return <button
    type={type}
    className={classNames(styles.root, styles[appearance])}
    onClick={onClick}>
      {children}
  </button>;
}

export default Button;