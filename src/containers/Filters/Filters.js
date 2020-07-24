import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Title, FilterList } from './Filters.style';
import Filter from '../../components/Filter';
import applyFilter from '../../redux/actions/filterActions';

const Filters = () => {
  const filters = useSelector((state) => state.filters.filtersData);
  const dispatch = useDispatch();

  const filterHandler = useCallback((label) => dispatch(applyFilter(label)), [
    dispatch,
  ]);

  return (
    <Container>
      <Title>Filter by category:</Title>
      <FilterList>
        {filters.map((item, id) => (
          <Filter
            key={id.toString()}
            label={item.label}
            SVGIcon={item.Icon}
            isActive={item.isActive}
            filterHandler={filterHandler}
          />
        ))}
      </FilterList>
    </Container>
  );
};

export default Filters;
