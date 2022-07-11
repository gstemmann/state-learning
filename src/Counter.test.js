import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';
import Counter from './Counter';



it('renders the Counter component', () => {
  render(<Counter />);
});

// snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
  });