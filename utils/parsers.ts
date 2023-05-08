export const getDecimalString = (value: number): string => {
  const decimalString = value.toLocaleString('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return decimalString;
};
