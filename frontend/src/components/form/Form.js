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

  // This onChange method must be passed to each input within the form, called with the corresponding field key
  const onFieldChange = fieldKey => 
    event => {
      // when an input field changes, we'll store its value in the form state
      let newValue = event.target.value;
      setValues({...values, [fieldKey]: newValue});

      // and find its field to see if the new value is valid for the field's logic
      const field = fields.find(f => f.name === fieldKey);

      if (field.required && !newValue)
        // there's no value and the field's required
        return setErrors({...errors, [fieldKey]: 'We need this info!'});

      if (!('validate' in field)) 
        // there's no custom validation
        return setErrors({...errors, [fieldKey]: null});

      // there's a custom validation (must return str/null)
      return setErrors({...errors, [fieldKey]: field.validate(newValue)});
    };

  return (
    <form className={styles.root}>
      {children(values, onFieldChange, errors, !Object.values(errors).some(err => err !== null))}
    </form>
  );
}

export default Form;