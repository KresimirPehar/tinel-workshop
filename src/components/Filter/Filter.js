import React from 'react';
import { Container, Grid, Label } from './Filter.style';

const Filter = ({ SVGIcon, label, isActive, filterHandler }) => {
  // only dispatch the action if filter is not active
  const onFilterClick = () => !isActive && filterHandler(label);

  return (
    <Container isActive={isActive} onClick={onFilterClick}>
      <Grid>
        {SVGIcon && <SVGIcon />}
        <Label isActive={isActive}>{label}</Label>
      </Grid>
    </Container>
  );
};

export default Filter;
