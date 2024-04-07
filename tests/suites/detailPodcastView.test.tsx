import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from "@capitole/App"

describe('Podcast List', () => {
  it.skip('Renders correctly podcast detail correctly', async () => {
    render(
      <App />
    );

    const podcastButton = await screen.findByRole("button", { name: /The Joe Budden Podcast/i});

    await userEvent.click(podcastButton);

    const spinner = await screen.findByRole("progressbar");
    expect(spinner).toBeInTheDocument();

    await waitFor(() => expect(spinner).not.toBeInTheDocument())

    screen.debug();

  });
});