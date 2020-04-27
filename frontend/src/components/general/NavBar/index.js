import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import styles from './styles.module.scss';

function NavBar({title}) {
  const auth = useSelector(state => state.auth);

  return <div className={styles.root}>
            <div className={styles.grid}>
                <div className={styles.title}>
                    {title && <div className={styles.breadcrumbs}>Cosmotecton</div>}
                    <h1>{title || 'Cosmotecton'}</h1>
                </div>
                <div className={styles.user}>
                    {auth.username}
                    <div className={styles.avatar}>
                        <i className={classNames('las', 'la-user-alt')} />
                    </div>
                </div>
            </div>
        </div>;
}

export default NavBar;