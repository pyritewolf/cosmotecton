import React, { Fragment, useContext} from 'react';

import { NavBar } from 'components/general';
import { store } from 'contexts/world';

import styles from './styles.module.scss';

function Story() {
  const {world} = useContext(store);
  return (
    <Fragment>
      <NavBar title={world && world.name}/>
      <div className={styles.root}>
        <textarea className={styles.editor} autoFocus placeholder={'Once upon a time...'}>
        </textarea>
      </div>
    </Fragment>
  );
}

export default Story;