import React, { forwardRef } from 'react';

import styles from './styles.module.scss';

const Card = forwardRef(({children}, ref) => {
  return (
    <div ref={ref} className={styles.root}>
        {children}
    </div>
  );
});

export default Card;