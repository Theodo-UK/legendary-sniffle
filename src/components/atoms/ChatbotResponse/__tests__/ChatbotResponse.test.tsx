import { axe } from 'jest-axe';
import { act, render } from '@testing-library/react';
import { ChatbotResponse } from '../ChatbotResponse';

const mockMessage = 'blank';

it.each([['Output', <ChatbotResponse message={mockMessage} />]])(
  '%s should not have any basic accessibility issues',
  async (name, Component) => {
    const { container } = render(Component);

    await act(async () => {
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  }
);
