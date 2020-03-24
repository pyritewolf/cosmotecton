import React from 'react';
import { connect } from 'react-redux';

import { NavBar } from 'components/general';

import styles from './styles.module.scss';

function Home() {
  return (
    <NavBar>
      <div className={styles.root}>
        Welcome!
      </div>
    </NavBar>
  );
}

export default connect()(Home);