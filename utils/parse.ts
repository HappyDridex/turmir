function parsePhoneNumber(input: string): string {
  return input.replace(/[^+\d]/g, '');
}

export { parsePhoneNumber };
