import React, {Fragment} from 'react';
import { connect } from 'react-redux';

import { Form, Input, Button } from 'components/form';
import { Card } from 'components/general';
import { logIn } from 'actions/auth';

import styles from './styles.module.scss';

function LogIn({dispatch}) {
  const onSubmit = (username, password) => 
    e => {
      e.preventDefault();
      dispatch(logIn(username, password));
    };

  return (
    <div className={styles.root}>
      <Card>
        <h1>Log in</h1>
        <Form fields={[{name: 'username', required: true}, {name: 'password', required: true}]}>
          {(values, onChange, errors, isValid) => (
            <Fragment>
              <Input placeholder='Username' value={values.username} onChange={onChange('username')} error={errors.username} />
              <Input placeholder='Your super safe password' value={values.password} onChange={onChange('password')} error={errors.password} type='password'/>
              <Button appearance="block" disabled={!isValid} onClick={onSubmit(values.username, values.password)} type="submit">Log in</Button>
            </Fragment>
          )}
        </Form>
      </Card>
    </div>
  );
}

export default connect()(LogIn);