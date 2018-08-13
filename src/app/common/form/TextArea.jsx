import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const TextArea = ({input, type, rows, placeholder, meta: {touched, error}}) => {
  //console.log('input: ', input)
  return (
    <Form.Field error={touched && !!error}>
      <textarea {...input} placeholder={placeholder} rows={rows} type={type}></textarea>
      {touched && error && <Label basic color="red">{error}</Label>}
    </Form.Field>
  )
}

export default TextArea
