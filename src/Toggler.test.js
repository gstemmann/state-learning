import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import Toggler from './Toggler';



it('should toggle', () => {
  const { getByText } = render(<Toggler />);
  const button = screen.getByText('Show');
  // const paragraph = screen.getByText(" um, i guess.. idk ");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(getByText('Hide')).toBeInTheDocument();
    // expect(paragraph).not.toBeInTheDocument();

});

