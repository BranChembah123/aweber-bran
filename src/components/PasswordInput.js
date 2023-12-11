import React from 'react';

const PasswordInput = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}:</label>
      <input
        type="password"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default React.memo(PasswordInput);