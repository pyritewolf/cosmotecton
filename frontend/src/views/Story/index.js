import React, {useState, Fragment} from 'react';
import { connect, useSelector } from 'react-redux';
import classNames from 'classnames';

import { NavBar } from 'components/general';
import { Button, Form, Input } from 'components/form';

import styles from './styles.module.scss';

function Story({dispatch}) {

  return (
    <Fragment>
      <NavBar/>
        <div className={styles.root}>
            A new story
        </div>
    </Fragment>
  );
}

export default connect()(Story);