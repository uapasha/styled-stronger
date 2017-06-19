import repeat from 'repeat-string';

const enhanced = (literal, power) => {
  const lastElement = literal.length - 1;
  const first = `${repeat('&', power)} { ${literal[0]}`;
  const last = `${literal[lastElement] || ''} }`;
  return [first, ...literal.slice(1, lastElement), last];
};

export const enhanceStyled = (fn, power = 1) => (literal, ...functions) =>
  fn(enhanced(literal, power), ...functions);

const stronger = (power = 1) => (literal, ...functions) => [enhanced(literal, power), ...functions];

export default stronger;
