## Simple helper that allows you to make styled-components more powerful in terms of CSS specificity

Turns your `styled-components` styles

from:

```css
.styled-class {
  background-color: #fff;
  float: initial;
  font-size: 12px;
}
```

to:

```css
.styled-class.styled-class.styled-class.styled-class {
  background-color: #fff;
  float: initial;
  font-size: 12px;
}
```


which helps overriding styles from various libraries

### Usage

```js

import styledStronger, { enhanceStyled } from 'styled-stronger';


const timesStyledClassIsApplied = 4;

// you can wrap styled function into enhanceStyled wrapper
const ButtonEnhancedStyled = enhanceStyled(styled.button, timesStyledClassIsApplied)`
  background-color: #fff;
  float: ${({ float }) => float || 'initial'}};
  font-size: 12px;
`;


// or you can use styledStronger to make styles stronger
const enhancedStyles = styledStronger(timesStyledClassIsApplied)`
  background-color: #fff;
  float: ${({ float }) => float || 'initial'}};
  font-size: 12px;
`;


const ButtonEnhancedLiteral = styled.button(enhancedStyles);


```

