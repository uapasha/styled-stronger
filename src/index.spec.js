import 'jest-styled-components';
import { create } from 'react-test-renderer';

import React from 'react';
import styled from 'styled-components';

import stronger, { enhanceStyled } from '.';

const propFunc = ({ float }) => float || 'initial';

describe('stronger', () => {
  it('handles no amplifier', () => {
    const enhancedStyles = stronger(1)`
        background-color: #fff;
        float: ${propFunc};
        font-size: 12px;
    `;

    const ButtonEnhancedLiteral = styled.button(enhancedStyles);
    expect(create(<ButtonEnhancedLiteral float="left" />)).toMatchStyledComponentsSnapshot();
  });

  it('handles string amplifier', () => {
    const enhancedStyles = stronger('dsff')`
        background-color: #fff;
        float: ${propFunc};
        font-size: 12px;
    `;

    const ButtonEnhancedLiteral = styled.button(enhancedStyles);
    expect(create(<ButtonEnhancedLiteral float="left" />)).toMatchStyledComponentsSnapshot();
  });

  it('handles amplified once', () => {
    const enhancedStyles = stronger()`
        background-color: #fff;
        float: ${propFunc};
        font-size: 12px;
    `;

    const ButtonEnhancedLiteral = styled.button(...enhancedStyles);
    expect(create(<ButtonEnhancedLiteral float="left" />)).toMatchStyledComponentsSnapshot();
  });

  it('handles 20 amplifier', () => {
    const enhancedStyles = stronger(20)`
        background-color: #fff;
        float: ${propFunc};
        font-size: 12px;
    `;

    const ButtonEnhancedLiteral = styled.button(enhancedStyles);
    expect(create(<ButtonEnhancedLiteral float="left" />)).toMatchStyledComponentsSnapshot();
  });

  it('handles 5 amplifier and no prop passed', () => {
    const enhancedStyles = stronger(20)`
        background-color: #fff;
        float: ${propFunc};
        font-size: 12px;
    `;

    const ButtonEnhancedLiteral = styled.button(enhancedStyles);
    expect(create(<ButtonEnhancedLiteral />)).toMatchStyledComponentsSnapshot();
  });

  it('applied once and no amplified set are equal', () => {
    const enhancedStyles = stronger()`
        background-color: #fff;
        float: ${propFunc};
        font-size: 12px;
    `;
    const enhancedStyles1 = stronger(1)`
        background-color: #fff;
        float: ${propFunc};
        font-size: 12px;
    `;

    expect(enhancedStyles).toEqual(enhancedStyles1);
  });
});

describe('enhanceStyled', () => {
  it('handles no amplifier', () => {
    const ButtonEnhancedStyled = enhanceStyled(styled.p)`
      background-color: #fff;
      float: ${propFunc};
      font-size: 12px;
    `;
    expect(create(<ButtonEnhancedStyled float="right" />)).toMatchStyledComponentsSnapshot();
  });

  it('handles amplifier of 1', () => {
    const ButtonEnhancedStyled = enhanceStyled(styled.p, 1)`
      background-color: #fff;
      float: ${propFunc};
      font-size: 12px;
    `;
    expect(create(<ButtonEnhancedStyled />)).toMatchStyledComponentsSnapshot();
  });

  it('handles amplifier of 0', () => {
    const ButtonEnhancedStyled = enhanceStyled(styled.p, 0)`
      background-color: #fff;
      float: ${propFunc};
      font-size: 12px;
    `;
    expect(create(<ButtonEnhancedStyled />)).toMatchStyledComponentsSnapshot();
  });

  it('handles amplifier of 100', () => {
    const ButtonEnhancedStyled = enhanceStyled(styled.p, 100)`
      background-color: #fff;
      float: ${propFunc};
      font-size: 12px;
    `;
    expect(create(<ButtonEnhancedStyled />)).toMatchStyledComponentsSnapshot();
  });
});
