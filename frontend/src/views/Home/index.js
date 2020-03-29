import React, {Fragment, useState} from 'react';
import { connect, useSelector } from 'react-redux';
import classNames from 'classnames';

import { NavBar, Dialog } from 'components/general';
import { Button } from 'components/form';

import styles from './styles.module.scss';

function Home() {
  const worlds = useSelector(state => state.worlds)
  const [isWorldCreationOpen, setIsWorldCreationOpen] = useState(false);
  const closeWorldCreation = () => {
    setIsWorldCreationOpen(false);
  }

  const noWorlds = () => <Fragment>
    <div className={styles.content}>
      <img src={`${process.env.PUBLIC_URL}/images/createWorld.svg`} alt="Create a world!" />
      <h2>Welcome!</h2>
      <p>It looks like you haven't created any worlds yet.</p>
      <Button onClick={() => setIsWorldCreationOpen(true)}>Let's start</Button>
    </div>
    <Dialog open={isWorldCreationOpen} onClose={closeWorldCreation}>Hey</Dialog>
  </Fragment>;

  return (
    <NavBar>
      <div className={classNames(styles.root, !worlds.length && styles.noWorlds)}>
        {worlds.length ? 'you have worlds' : noWorlds()}
      </div>
    </NavBar>
  );
}

export default connect()(Home);