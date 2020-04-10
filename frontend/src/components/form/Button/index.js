import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';


function Button({children, type = 'button', appearance = "default", size = "md", color="primary", icon = null, disabled, onClick, hoverable}) {
  return <button
    disabled={disabled}
    type={type}
    className={classNames(styles.root, styles[`appearance-${appearance}`], styles[`size-${size}`], styles[`color-${color}`], hoverable && icon && styles.hoverable)}
    onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>
        {children}
      </span>
  </button>;
}

export default Button;