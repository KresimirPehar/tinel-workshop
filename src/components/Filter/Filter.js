import React from 'react';
import { Container, Label } from './Filter.style';

const Filter = ({ SVGIcon, label }) => {
  return (
    <Container>
      {SVGIcon && <SVGIcon />}
      <Label>{label}</Label>
    </Container>
  );
};

export default Filter;
