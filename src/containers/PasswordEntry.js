import React, { useState } from 'react';
import PasswordInput from '../components/PasswordInput';
import ValidationMessage from '../components/ValidationMessage';
import { validatePassword } from '../utils/passwordValidation';

const PasswordEntry = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validatePassword(password, confirmPassword);
    if (validationError) {
      setMessage(validationError);
      setIsSuccess(false);
    } else {
      setMessage('Password is valid!');
      setIsSuccess(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <PasswordInput label="Password" value={password} onChange={setPassword} />
        <PasswordInput label="Confirm Password" value={confirmPassword} onChange={setConfirmPassword} />
        <button type="submit">Submit</button>
      </form>
      {message && <ValidationMessage message={message} isSuccess={isSuccess} />}
    </div>
  );
};

export default PasswordEntry;