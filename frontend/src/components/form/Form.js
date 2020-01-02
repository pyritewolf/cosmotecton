import React, { useState } from 'react';
import styles from './Form.module.scss';


function Form({children, fields}) {
  const [values, setValues] = useState(fields.reduce((vals, field) => {
    vals[field.name] = field.default || '';
    return vals
  }, {}));

  const [errors, setErrors] = useState(fields.reduce((errs, field) => {
    errs[field.name] = null;
    return errs
  }, {}));

  const onFieldChange = fieldKey => 
    event => {
      let newValue = event.target.value;
      setValues({...values, [fieldKey]: newValue});
      const field = fields.find(f => f.name === fieldKey);
      if (field.required && !newValue)
        return setErrors({...errors, [fieldKey]: 'We need this info!'});
      if (field.validate === undefined) 
        return setErrors({...errors, [fieldKey]: null});
      const errMsg = field.validate(newValue);
      if (errMsg)
        return setErrors({...errors, [fieldKey]: errMsg});
    };

  return (
    <form className={styles.root}>
      {children(values, onFieldChange, errors, !Object.values(errors).some(err => err !== null))}
    </form>
  );
}

export default Form;