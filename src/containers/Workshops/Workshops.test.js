import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Workshops from '.';
import getWorkshopItems from '../../utils/mocks';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest.fn(),
}));

describe('Workshops component', () => {
  it('should display a number of displayed workshops', () => {
    useSelector.mockImplementation((state) =>
      state({
        workshops: {
          workshopsData: getWorkshopItems(3),
        },
        filters: {
          appliedFilter: 'all',
        },
        checkout: {},
      })
    );
    render(
      <Router>
        <Workshops />
      </Router>
    );
    expect(screen.getByText(/displayed/gi)).toHaveTextContent(3);
  });

  it('should display "load more" label for 9 workshops displayed', () => {
    useSelector.mockImplementation((state) =>
      state({
        workshops: {
          workshopsData: getWorkshopItems(9),
        },
        filters: {
          appliedFilter: 'all',
        },
        checkout: {},
      })
    );
    render(
      <Router>
        <Workshops />
      </Router>
    );
    expect(screen.getByText(/load more/gi)).toBeInTheDocument();
  });

  it('should not display "load more" label for less than 9 workshops displayed', () => {
    useSelector.mockImplementation((state) =>
      state({
        workshops: {
          workshopsData: getWorkshopItems(3),
        },
        filters: {
          appliedFilter: 'all',
        },
        checkout: {},
      })
    );
    render(
      <Router>
        <Workshops />
      </Router>
    );
    expect(screen.queryByText(/load more/gi)).not.toBeInTheDocument();
  });

  it('should return filtered workshops when applied filter is different than "all"', () => {
    useSelector.mockImplementation((state) =>
      state({
        workshops: {
          workshopsData: getWorkshopItems(3),
          filteredWorkshopsData: getWorkshopItems(2),
        },
        filters: {
          appliedFilter: 'design',
        },
        checkout: {},
      })
    );
    render(
      <Router>
        <Workshops />
      </Router>
    );
    expect(screen.getByText(/displayed/gi)).toHaveTextContent(2);
  });
});
