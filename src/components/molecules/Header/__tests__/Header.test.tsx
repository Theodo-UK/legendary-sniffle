import { axe } from 'jest-axe';
import { act, render } from '@testing-library/react';
import { Header } from '../Header';

describe('should display the component correctly on the page', () => {
  it.each([['Header', <Header />]])(
    '%s should not have any basic accessibility issues',
    async (name, Component) => {
      const { container } = render(Component);

      await act(async () => {
        const results = await axe(container);

        expect(results).toHaveNoViolations();
      });
    }
  );

  it('should display the image when the header is loaded', async () => {
    const res = render(<Header />);
    expect(res.container.querySelector('#logoImage')).toBeTruthy();
  });
});
