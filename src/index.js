import repeat from 'repeat-string';

const enhanced = (literal, power) => {
  const first = `${repeat('&', power)} { ${literal[0]}`;
  const last = `${literal[literal.length] || ''} }`;
  return [first, ...literal.slice(1, literal.length - 1), last];
};

export const enhanceStyled = (fn, power = 1) => (literal, ...functions) =>
  fn(enhanced(literal, power), ...functions);

const stronger = (power = 1) => (literal, ...functions) => [enhanced(literal, power), ...functions];

export default stronger;
