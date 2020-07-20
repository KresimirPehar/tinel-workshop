import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Filter from '.';
import colors from '../../constants/colors';

describe('Filter component', () => {
  it('should call filter handler function only if the filter is inactive', () => {
    const filterHandler = jest.fn();
    render(
      <Filter label='design' isActive={false} filterHandler={filterHandler} />
    );
    const element = screen.getByText(/design/i);
    userEvent.click(element);
    expect(filterHandler).toHaveBeenCalled();
  });

  it('should not call filter handler function if the filter is already active', () => {
    const filterHandler = jest.fn();
    render(<Filter label='design' isActive filterHandler={filterHandler} />);
    const element = screen.getByText(/design/i);
    userEvent.click(element);
    expect(filterHandler).not.toHaveBeenCalled();
  });

  it('should not have active style if the filter is inactive', () => {
    render(<Filter label='design' isActive={false} />);
    const element = screen.getByText(/design/i);
    expect(element).not.toHaveStyle(`color: ${colors.secondary}`);
  });

  it('should have active style when the filter is active', () => {
    render(<Filter label='design' isActive />);
    const element = screen.getByText(/design/i);
    expect(element).toHaveStyle(`color: ${colors.secondary}`);
  });
});
