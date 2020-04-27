import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';


function Button({
  children, // actual button content
  disabled,
  onClick,
  type = 'button', // html button type
  appearance = "default", // default, block, outline
  size = "md", // md, sm
  color="primary", // secondary, grey
  icon = null, // a node for an icon
  hoverable // enable hoverable-hidden text
}) {
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