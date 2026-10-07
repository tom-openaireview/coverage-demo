export function displayLabel(value) {
  if (value.trim() === '') {
    return '(untitled)';
  }
  return value.trim();
}

export function displayStatus(value) {
  if (value === '') {
    return 'unknown';
  }
  return value.toLowerCase();
}
