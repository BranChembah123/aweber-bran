export const validatePassword = (password, confirmPassword) => {
    if (!password || !confirmPassword) {
      return 'Passwords do not match';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one number';
    }
    if (!/[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/.test(password)) {
      return 'Password must contain at least one special character (!@#$%^&*()_-+={[}]|:;"\'<,>.)';
    }
    return null;
  };
  