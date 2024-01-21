export function isEmail(value) {
  return value.includes('@');
}

export function isNotEmpty(value) {
  return value.trim() !== '';
}

export function isMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}