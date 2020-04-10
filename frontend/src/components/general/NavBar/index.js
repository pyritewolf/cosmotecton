import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import styles from './styles.module.scss';


function NavBar({children}) {
  const auth = useSelector(state => state.auth)

  return <Fragment>
        <div className={styles.root}>
            <div className={styles.grid}>
                <h1>Cosmotecton</h1>
                <div className={styles.user}>
                    {auth.username}
                    <div className={styles.avatar}>
                        <i className={classNames('las', 'la-user-alt')} />
                    </div>
                </div>
            </div>
        </div>
        {children}
  </Fragment>;
}

export default NavBar;