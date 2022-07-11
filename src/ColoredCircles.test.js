import React from "react";
import { render, screen } from "@testing-library/react";
import ColoredCircles from "./ColoredCircles";

it('renders the ColoredCircles component', () => {
    render(<ColoredCircles />);
  });
  
  // snapshot test
  it("matches snapshot", function() {
      const {asFragment} = render(<ColoredCircles/>);
      expect(asFragment()).toMatchSnapshot();
    });
  
