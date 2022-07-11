import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';
import ShoppingList from './ShoppingList';



it('renders the ShoppingList component', () => {
  render(<ShoppingList />);
});