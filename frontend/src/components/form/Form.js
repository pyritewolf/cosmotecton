import React, { useState } from 'react';
import styles from './Form.module.scss';


function Form({children, fields}) {
  const [values, setValues] = useState(fields.reduce((vals, field) => {
    vals[field.name] = field.default || '';
    return vals
  }, {}));

  const onFieldChange = (fieldKey) => {
    return (newValue) => {
      let newValues = {...values};
      newValues[fieldKey] = newValue.target.value;
      setValues(newValues)
    }
  };

  return (
    <form className={styles.root}>
      {children(values, onFieldChange)}
    </form>
  );
}

export default Form;