import React from 'react';
import { connect } from 'react-redux';

import { NavBar } from 'components/general';

import styles from './styles.module.scss';

function Home() {
  return (
    <NavBar>
      <div className={styles.root}>
        <h2>Welcome!</h2>
      </div>
    </NavBar>
  );
}

export default connect()(Home);