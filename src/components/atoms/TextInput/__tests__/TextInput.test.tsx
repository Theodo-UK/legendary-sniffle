import { axe } from 'jest-axe';
import { act, render } from '@testing-library/react';
import { TextInput } from '../TextInput';

const mockSetInput = () => null;

it.each([
  ['Input', <TextInput id="basic" type="key" setInput={mockSetInput} />],
  [
    'Input withPlaceholder',
    <TextInput
      id="withPlaceholder"
      type="text"
      placeholder="Placeholder"
      setInput={mockSetInput}
    />,
  ],
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
