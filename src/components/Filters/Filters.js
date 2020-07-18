import React from 'react';
import { Container, Title, FilterList } from './Filters.style';
import filterIcons from '../../assets/filters/index';
import Filter from '../Filter';

const Filters = () => {
  return (
    <Container>
      <Title>Filter by category</Title>
      <FilterList>
        {Object.keys(filterIcons).map((item, id) => (
          <Filter
            key={id.toString()}
            label={item}
            SVGIcon={filterIcons[item]}
          />
        ))}
      </FilterList>
    </Container>
  );
};

export default Filters;
