import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import styles from './styles.module.scss';


function NavBar({children}) {
  const auth = useSelector(state => state.auth)

  return <Fragment>
        <div className={styles.root}>
            <div className={styles.grid}>
                <h1>Cosmotecton</h1>
                <div className={styles.user}>
                    {auth.username}
                </div>
            </div>
        </div>
        {children}
  </Fragment>;
}

export default NavBar;