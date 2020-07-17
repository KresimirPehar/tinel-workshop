import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import WorkshopList from '.';
import getWorkshopItems from '../../utils/mocks';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest.fn(),
}));

describe('Workshop list component', () => {
  it('should display a number of displayed workshops', () => {
    useSelector.mockImplementation((state) => state(getWorkshopItems(3)));
    render(<WorkshopList />);
    expect(screen.getByText(/displayed/gi)).toHaveTextContent(3);
  });

  it('should display "load more" label for 9 workshops displayed', () => {
    useSelector.mockImplementation((state) => state(getWorkshopItems(9)));
    render(<WorkshopList />);
    expect(screen.getByText(/load more/gi)).toBeInTheDocument();
  });

  it('should not display "load more" label for less than 9 workshops displayed', () => {
    useSelector.mockImplementation((state) => state(getWorkshopItems(3)));
    render(<WorkshopList />);
    expect(screen.queryByText(/load more/gi)).not.toBeInTheDocument();
  });
});
