import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'components/form';
import {logIn} from 'actions/auth';
import styles from './LogIn.module.scss';

function LogIn({dispatch}) {
  const onSubmit = (username, password) => 
    () => dispatch(logIn(username, password));

  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <h1>Log in</h1>
        <Form fields={[{name: 'username', required: true}, {name: 'password', required: true}]}>
          {(values, onChange, errors, isValid) => (
            <Fragment>
              <Input placeholder='Username' value={values.username} onChange={onChange('username')} error={errors.username} />
              <Input placeholder='Your super safe password' value={values.password} onChange={onChange('password')} error={errors.password} type='password'/>
              <Button appearance="block" disabled={!isValid} onClick={onSubmit(values.username, values.password)}>Log in</Button>
            </Fragment>
          )}
        </Form>
      </div>
    </div>
  );
}

export default connect()(LogIn);