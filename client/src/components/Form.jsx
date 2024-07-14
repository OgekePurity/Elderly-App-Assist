// src/components/Form.jsx

import React, { useState } from 'react';

/**
 * @typedef {Object} Field
 * @property {string} name
 * @property {string} type
 * @property {string} label
 */

/**
 * @typedef {Object} FormProps
 * @template T
 * @property {Field[]} fields
 * @property {(data: T) => void} onSubmit
 * @property {string} submitText
 */

function Form({ fields, onSubmit, submitText }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">{submitText}</button>
    </form>
  );
}

export default Form;