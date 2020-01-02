import React, {Fragment} from 'react';
import styles from './LogIn.module.scss';
import { Form, Input, Button } from 'components/form';

function LogIn() {
  return (
    <div className={styles.root}>
      <h1>Log in</h1>
      <Form fields={[{name: 'username'}, {name: 'password'}]}>
        {(values, onChange) => (
          <Fragment>
            <Input placeholder='Username' value={values.username} onChange={onChange('username')} />
            <Input placeholder='Your super safe password' value={values.password} onChange={onChange('password')} type='password'/>
            <Button appearance="block">Log in</Button>
          </Fragment>
        )}
      </Form>
    </div>
  );
}

export default LogIn;