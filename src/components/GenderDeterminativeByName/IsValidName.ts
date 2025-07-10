export default function isValidName(name: string): string {
  const trimmed = name.trim();

  if (trimmed.length < 2 || trimmed.length > 30) {
    throw new Error(`The name must be at least 2 and no more than 30 characters long.`);
  }

  const latinRegex = /^[A-Za-z]+$/;
  const cyrillicRegex = /^[А-Яа-яЁё]+$/;

  if (!latinRegex.test(trimmed) && !cyrillicRegex.test(trimmed)) {
    throw new Error('The name must contain only Latin or Cyrillic letters (no digits or special characters).');
  }
  return trimmed;
}
