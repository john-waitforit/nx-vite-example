import { render, screen } from '@testing-library/react';

import {Button} from './button';

describe('Button', () => {
  it('should render successfully', () => {
    render(<Button title='Click me!' />);
    screen.getByText(/Click me!/)
  });
});
