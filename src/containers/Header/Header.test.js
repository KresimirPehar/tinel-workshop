import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '.';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest.fn(),
}));

describe('Checkout cart component', () => {
  it('should be closed by default', () => {
    useSelector.mockImplementation((state) =>
      state({
        checkout: {},
      })
    );
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(
      screen.queryByRole('button', { name: /checkout/i })
    ).not.toBeInTheDocument();
  });

  it('should be opened when clicked on the cart icon', () => {
    useSelector.mockImplementation((state) =>
      state({
        checkout: {},
      })
    );
    render(
      <Router>
        <Header />
      </Router>
    );
    userEvent.click(screen.getByAltText('cart'));
    expect(screen.queryByText(/cart/i)).toBeInTheDocument();
  });
});
