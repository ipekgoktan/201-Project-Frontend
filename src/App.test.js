import { render, screen } from '@testing-library/react';	
import App from '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/createUser.js';	

test('renders learn react link', () => {	
  render(<App />);	
  const linkElement = screen.getByText(/learn react/i);	
  expect(linkElement).toBeInTheDocument();	
});	
