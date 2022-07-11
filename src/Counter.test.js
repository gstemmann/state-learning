import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
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

  // check h1
it("renders the h1", function() {
    render(<Counter />);
    expect(screen.getByText("Counter is at : 1")).toBeInTheDocument();
    } 
);
it ("renders the button", function() {
    render(<Counter />);
    expect(screen.getByText("+")).toBeInTheDocument();
    }   
);

  // check button
it("renders the button", function() {
    render(<Counter />);
    expect(screen.getByText("+")).toBeInTheDocument();
    } 
);

it('changes things when its clicked', function() {
    render(<Counter />);
    const button = screen.getByText("+");
    fireEvent.click(button);
    expect(screen.getByText("Counter is at : 2")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText("+2")).toBeInTheDocument();
  
    }
);

test('button increments the counter', function() {
    const { getByText, debug } = render(<Counter />);
    const button = getByText("+");
    const h1 = getByText("Counter is at : 1");
    debug()
    fireEvent.click(button);
    debug()
    expect(h1).toHaveTextContent("Counter is at : 2");
})