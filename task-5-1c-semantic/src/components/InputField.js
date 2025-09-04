import React from 'react';
import { Form, TextArea, Input } from 'semantic-ui-react';

const InputField = ({ label, value, onChange, placeholder, rows, width = 16 }) => {
  return (
    <Form.Field width={width} style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        <label 
          style={{ 
            fontWeight: '500', 
            color: '#333', 
            minWidth: '120px',
            paddingTop: '0.5rem',
            textAlign: 'left'
          }}
        >
          {label}
        </label>
        <div style={{ flex: 1 }}>
          {rows ? (
            <TextArea
              value={value}
              onChange={(e, { value }) => onChange(value)}
              placeholder={placeholder}
              rows={rows}
              style={{ width: '100%', resize: 'none' }}
            />
          ) : (
            <Input
              value={value}
              onChange={(e, { value }) => onChange(value)}
              placeholder={placeholder}
              fluid
            />
          )}
        </div>
      </div>
    </Form.Field>
  );
};

export default InputField;