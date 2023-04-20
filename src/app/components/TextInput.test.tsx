import { axe } from 'jest-axe';
import { act, render } from '@testing-library/react';
import { TextInput } from './TextInput';

it.each([
  ['Input', <TextInput id="basic" type="key" />],
  [
    'Input withPlaceholder',
    <TextInput id="withPlaceholder" type="text" placeholder="Placeholder" />,
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
