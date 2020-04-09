import React, {Fragment, useState} from 'react';
import { connect, useSelector } from 'react-redux';
import classNames from 'classnames';

import { saveWorld } from 'actions/worlds';
import { NavBar, Dialog, Card } from 'components/general';
import { Button, Form, Input } from 'components/form';

import styles from './styles.module.scss';

function Home({dispatch}) {
  // fetchWorlds()
  const worlds = useSelector(state => state.worlds)
  const [isWorldCreationOpen, setIsWorldCreationOpen] = useState(false);
  const closeWorldCreation = () => {
    setIsWorldCreationOpen(false);
  }

  const onSubmitWorld = (name) => 
  e => {
    e.preventDefault();
    dispatch(saveWorld({name}));
  };

  const noWorlds = () => <Fragment>
    <div className={styles.content}>
      <img src={`${process.env.PUBLIC_URL}/images/createWorld.svg`} alt="Create a world!" />
      <h2>Welcome!</h2>
      <p>It looks like you haven't created any worlds yet.</p>
      <Button onClick={() => setIsWorldCreationOpen(true)}>Let's start</Button>
    </div>
    <Dialog open={isWorldCreationOpen} onClose={closeWorldCreation}>
      <h2>This is your starting spot</h2>
      <p>Choose a name for your world. Don't worry, you can come back and change it later, and you'll be the only one who can access it for now.</p>
      <Form fields={[{name: 'name', required: true}]}>
          {(values, onChange, errors, isValid) => (
            <Fragment>
              <Input placeholder='A cool name' value={values.name} onChange={onChange('name')} error={errors.name} />
              <Button appearance="block" disabled={!isValid} onClick={onSubmitWorld(values.name)} type="submit">Create this world</Button>
            </Fragment>
          )}
        </Form>
    </Dialog>
  </Fragment>;

  return (
    <NavBar>
      <div className={classNames(styles.root, !worlds.length && styles.noWorlds)}>
        {worlds.length ? <div className={styles.worlds}>
          {worlds.map(world => <Card>
            <h2>{world.name}</h2>
          </Card>)}
        </div> : noWorlds()}
      </div>
    </NavBar>
  );
}

export default connect()(Home);