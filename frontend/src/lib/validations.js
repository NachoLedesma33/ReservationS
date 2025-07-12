export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validateRequired = (value) => {
  return value !== null && value !== undefined && value.trim() !== "";
};

export const validateForm = (data, rules) => {
  const errors = {};

  for (const field in rules) {
    const fieldRules = rules[field];
    const value = data[field];

    if (fieldRules.required && !validateRequired(value)) {
      errors[field] = "Este campo es obligatorio";
      continue;
    }

    if (fieldRules.email && !validateEmail(value)) {
      errors[field] = "Email inválido";
    }

    if (fieldRules.minLength && value.length < fieldRules.minLength) {
      errors[field] = `Mínimo ${fieldRules.minLength} caracteres`;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
