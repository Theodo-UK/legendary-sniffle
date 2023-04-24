import { axe } from 'jest-axe';
import { act, render } from '@testing-library/react';
import { ExampleQuestion } from '../ExampleQuestion';

const mockMessage = 'blank';
const mockOnClick = () => null;

it.each([
  ['Output', <ExampleQuestion question={mockMessage} onClick={mockOnClick} />],
])(
  '%s should not have any basic accessibility issues',
  async (name, Component) => {
    const { container } = render(Component);

    await act(async () => {
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  }
);
