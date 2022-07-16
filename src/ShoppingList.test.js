import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import ShoppingList from './ShoppingList';



it('renders the ShoppingList component', () => {
  render(<ShoppingList />);
});
it('matches snapshot', function() {
    const {asFragment} = render(<ShoppingList />);
    expect(asFragment()).toMatchSnapshot();
  });


test('form adds new item', function() {
  render(<ShoppingList />);
  expect(screen.queryByText('purple butter')).not.toBeInTheDocument();
  const button = screen.queryByText('Add Item');
  const input = screen.getByLabelText('Product Name:');
  fireEvent.change(input, { target: { value: 'purple butter' } });
  expect(screen.queryByText('purple butter')).not.toBeInTheDocument();
  fireEvent.click(button);
  expect(screen.queryByText('purple butter')).toBeInTheDocument()
  
})