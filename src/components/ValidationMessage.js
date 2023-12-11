import React from 'react';

const ValidationMessage = ({ message, isSuccess }) => {
  return (
    <div style={{ color: isSuccess ? 'green' : 'red' }}>
      {message}
    </div>
  );
};

export default React.memo(ValidationMessage);