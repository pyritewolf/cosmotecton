import React, { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Card = forwardRef(({children, hoverable}, ref) => {
  return (
    <div ref={ref} className={classNames(styles.root, hoverable && styles.hoverable)}>
        {children}
    </div>
  );
});

export default Card;