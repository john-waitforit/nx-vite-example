import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App title='libeoweb'/>);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App title='libeoweb'/>);

    expect(getByText(/Welcome libeoweb/gi)).toBeTruthy();
  });
});
