function repeatString(string, times) {
  if (times < 0) return '';
  if (times === 1) return string;
  return string + repeatString(string, times - 1);
}

const enhanced = (literal, power = 1) => {
  const first = `${repeatString('&', power)} { ${literal[0]}`;
  const last = `${literal[literal.length] || ''} }`;
  return [first, ...literal.slice(1, literal.length - 1), last];
};

export const enhanceStyled = (fn, power) => (literal, ...functions) =>
  fn(enhanced(literal, power), ...functions);

const enhanceLiteral = power => (literal, ...functions) => [enhanced(literal, power), ...functions];

export default enhanceLiteral;
