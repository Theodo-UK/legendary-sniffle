import { axe } from 'jest-axe';
import { act, render } from '@testing-library/react';
import { LoadingSpinner } from '../LoadingSpinner';
import Home from '@/components/pages/Home/Home';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn().mockReturnValue({ isFetching: true, error: {} }),
}));

describe('should display the loading spinner at the appropriate times properly', () => {
  it.each([['Spinner', <LoadingSpinner />]])(
    '%s should not have any basic accessibility issues',
    async (name, Component) => {
      const { container } = render(Component);

      await act(async () => {
        const results = await axe(container);

        expect(results).toHaveNoViolations();
      });
    }
  );

  it('should show a loading spinner when isFetching is true', async () => {
    const { container } = render(<Home />);
    expect(container.querySelector('#loader')).toBeTruthy();
  });

  it('should not show a loading spinner when isFetching is false', async () => {
    jest.mock('@tanstack/react-query', () => ({
      useQuery: jest.fn().mockReturnValue({ isFetching: false, error: {} }),
    }));

    const { container } = render(<Home />);
    expect(container.querySelector('#loader')).toBeFalsy;
  });
});
