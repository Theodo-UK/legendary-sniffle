import { axe } from 'jest-axe';
import { act, render } from '@testing-library/react';
import { ChatbotResponse } from '../ChatbotResponse';

const mockResponse = { chatMessage: 'blank', associatedUrl: '' };
const mockResponseUrl = {
  chatMessage: 'blank',
  associatedUrl: 'https://localhost:somewhere',
};

it.each([
  ['Output', <ChatbotResponse {...mockResponse} />],
  ['Output withUrl', <ChatbotResponse {...mockResponseUrl} />],
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
